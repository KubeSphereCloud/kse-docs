const shell = require('shelljs');
const { PDF_FILES_DIR, PDF_CONTENT_DIR } = require('./constants');
const logger = require('../logger');
const needGenerate = require('./needGenerate');
const { getCommandParams } = require('../utils');
const { getAdocConfig } = require('./utils');

const envParams = [
  'PUPPETEER_DEFAULT_TIMEOUT',
  'PUPPETEER_NAVIGATION_TIMEOUT',
  'PUPPETEER_RENDERING_TIMEOUT',
  'PUPPETEER_PRINT_TIMEOUT',
];

const TIMEOUT_WARNING = 5 * 60 * 1000;

function getCommandFirstPart(adocConfig) {
  const TIMEOUT = adocConfig.pdf_timeout ? +adocConfig.pdf_timeout * 60 * 1000 : 3 * 60 * 1000;

  let command = envParams.map((p) => `export ${p}=${TIMEOUT}`).join(' && ');
  command += '&& asciidoctor-web-pdf';
  Object.entries(adocConfig).forEach(([key, val]) => {
    command += ` -a ${key}="${val}"`;
  });

  return command;
}

function generateFile({ adocPath, targetAdoc, pdfTitle, type = 'pdf', fileInfo = {} }) {
  const targetPath = type === 'pdf' ? targetAdoc.replace(/\.adoc$/i, '.pdf') : targetAdoc.replace(/\.adoc$/i, '.docx');
  const adocConfig = getAdocConfig({ filePath: adocPath, pdfTitle, fileInfo });
  let command = getCommandFirstPart(adocConfig);

  if (!needGenerate({ adocPath, targetPath, adocConfig })) {
    logger.info(`Skip ${targetPath}`);
    shell.cp(
      targetPath.replace(PDF_CONTENT_DIR, `${PDF_FILES_DIR}/${targetPath.replace(/.*?\.([a-zA-Z\d]+$)/i, '$1')}`),
      targetPath,
    );
    return;
  }

  const start = Date.now();
  if (type === 'pdf') {
    command += ` -a file_output_type="pdf" "${adocPath}" -o "${targetPath}"`;
    if (getCommandParams().preview) {
      command += ` --preview`;
    }
  } else {
    command += ` "${adocPath}"  -a file_output_type="docx" --only-html`;
    shell.exec(command);
    const _htmlPath = adocPath.replace(/\.adoc$/i, '.html');
    const htmlPath = targetAdoc.replace(/\.adoc$/i, '.html');
    shell.mv(_htmlPath, htmlPath);
    command = `node "${process.cwd()}/pdf/docx/html2docx.js" "${htmlPath}" "${targetPath}" -- --toclevels=${
      adocConfig.toclevels || 3
    }`;
  }

  logger.info(`Start generate ${targetPath}...`);

  const result = shell.exec(command);
  const stop = Date.now();
  if (stop - start > TIMEOUT_WARNING) {
    logger.warn(`${targetPath} 执行时间过长: ${Math.round(((stop - start) / 60 / 1000) * 100) / 100} 分钟!`);
  }

  if (result.stderr && result.stderr.includes('Error: TimeoutError')) {
    logger.error(`FAIL_COMMAND: ${command}`);
    logger.error(`TimeoutError! Generate ${targetPath} fail!`);
  } else if (result.code === 0) {
    logger.success(`Generate ${targetPath} success!`);
  } else {
    logger.error(`FAIL_COMMAND: ${command}`);
    logger.error(`Generate ${targetPath} fail!`);
  }
}

module.exports = generateFile;

const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

const workDir = path.join(process.cwd(), process.argv[2] || '');

const usedImages = new Set();

const IMAGE_SRC_REG = /<img\b[^>]*?\bsrc\s*=\s*(['\"])(.*?)\1/gi;
globSync(`${workDir}/**/*.html`).map((filePath) => {
  const content = fs.readFileSync(filePath, { encoding: 'utf-8' });
  const matches = content.matchAll(IMAGE_SRC_REG);
  for (const match of matches) {
    usedImages.add(match[2]);
  }
});

const imagePaths = globSync(`${workDir}/images/**/*.{png,jpg,gif,jpeg,webp,svg}`).map((imagePath) =>
  imagePath.replace(workDir, ''),
);

const allImages = new Set(imagePaths);

const unusedImages = Array.from(allImages).filter((imagePath) => {
  return ![...usedImages].some(usedPath => usedPath.includes(imagePath) || imagePath.includes(usedPath));
});
console.log(`found ${Array.from(allImages).length} images and used ${Array.from(usedImages).length} images and  ${unusedImages.length} unused images, removing...`);
unusedImages.forEach((imagePath) => {
  fs.unlinkSync(`${workDir}${imagePath}`);
});

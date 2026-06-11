FROM node:hydrogen-buster-slim
LABEL maintainer="QingCloud Doc"

RUN apt update
RUN apt install -y rsync asciidoctor hugo libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 libxkbcommon0 libxcomposite1 libxdamage1 libxrandr2 libgbm1 libpango-1.0-0 libcairo2 libasound2 
RUN mkdir -p /pitrix/lib/qingcloud-docs-center
WORKDIR /pitrix/lib/qingcloud-docs-center
COPY ./package.json package.json
RUN yarn

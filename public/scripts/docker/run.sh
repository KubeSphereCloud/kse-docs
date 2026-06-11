#!/bin/sh

docker run \
  -v $(pwd)/config:/pitrix/lib/qingcloud-docs-center/config \
  -v $(pwd)/content:/pitrix/lib/qingcloud-docs-center/content \
  -v $(pwd)/libs:/pitrix/lib/qingcloud-docs-center/libs \
  -v $(pwd)/pdf:/pitrix/lib/qingcloud-docs-center/pdf \
  -v $(pwd)/pkgs:/pitrix/lib/qingcloud-docs-center/pkgs \
  -v $(pwd)/scripts:/pitrix/lib/qingcloud-docs-center/scripts \
  -v $(pwd)/src-tauri:/pitrix/lib/qingcloud-docs-center/src-tauri \
  -v $(pwd)/static:/pitrix/lib/qingcloud-docs-center/static \
  -v $(pwd)/themes:/pitrix/lib/qingcloud-docs-center/themes \
  -w /pitrix/lib/qingcloud-docs-center \
  ethanliang2/docs:latest \
  npm run $@

echo "1. 打包 ks-qkcp 到远程服务器 /tmp/ks-qkcp.tar.gz ..."
ssh root@172.30.0.6 'cd /mnt/gitlab-runner/dist/dev/ && tar -czf /tmp/ks-qkcp.tar.gz ks-qkcp'

echo "2. 从远程服务器同步 ks-qkcp.tar.gz 到本地 /Users/wayne/Documents/qingcloud/qingcloud-docs-center/public"
rsync -avzP root@172.30.0.6:/tmp/ks-qkcp.tar.gz /Users/wayne/Documents/qingcloud/qingcloud-docs-center/public

echo "3. 解压 ks-qkcp.tar.gz 到 /Users/qc/Documents/Github/kse-docs/public/ ..."
tar -xzf /Users/qc/Documents/Github/kse-docs/public/ks-qkcp.tar.gz -C /Users/qc/Documents/Github/kse-docs/public/

echo "全部完成！"
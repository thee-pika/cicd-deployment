cd cicd-deployment
git pull origin main
pnpm install
pnpm run build
pm2 restart http
pm2 restart ws
pm2 restart web

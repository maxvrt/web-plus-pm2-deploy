const dotenv = require('dotenv');

dotenv.config({ path: '.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF, DEPLOY_REPO,
} = process.env;

module.exports = {
  apps: [{
    name: "frontend",
  }],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      'post-deploy': 'cd ~/m-frontend/source/frontend/ && npm i && npm run build',
    },
  },
}

/** /etc/nginx/sites-available$/domen.ru
server {
      listen 80; # принимаем запросы с 80 порта
      server_name smaksim.nomoredomains.work;
      root /home/vortm1/m-frontend/source/frontend/build;
      location / {
        try_files   $uri   $uri/   /index.html;
      }


    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/smaksim.nomoredomains.work/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/smaksim.nomoredomains.work/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
**/

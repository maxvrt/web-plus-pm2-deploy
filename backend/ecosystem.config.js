const dotenv = require('dotenv');

dotenv.config({ path: '.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF, DEPLOY_REPO,
} = process.env;

module.exports = {
  apps: [{
    name: 'backend',
    script: './dist/app.js',
  }],
  env: {
    NODE_ENV: 'production',
  },
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      // 'pre-deploy': 'cd ~/m-backend/source/backend',
      'post-deploy': 'cd ~/m-backend/source/backend/ && npm i && npm run build && cd ~/m-backend/source/backend/dist/ && pm2 start app.ts',
    },
  },
};

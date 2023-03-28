const dotenv = require('dotenv');

dotenv.config({ path: '.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF, DEPLOY_REPO,
} = process.env;

module.exports = {
  apps: [
    {
      name: "frontend",
      env: {
        NODE_ENV: "production",
      },
      cwd: "./frontend",
    },
    {
      name: "backend",
      script: "./backend/dist/app.ts",
      env: {
        NODE_ENV: "production",
      },
      cwd: "./backend",
    },
  ],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      'post-deploy': 'cd ~/mesto/source/frontend/ && npm i && npm run build',
    },
  },
}

module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps : [
      {
        name      : 'moviebot',
        script    : 'index.js',
        interpreter: 'node@10.16.0',
        env: {
          NODE_ENV: "development"
        },
        env_production : {
          NODE_ENV: 'production'
        }
      }
    ],
  };

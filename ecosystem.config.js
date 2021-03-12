module.exports = {
  apps : [{
    name: 'iNotes-Backend-Server',
    script: 'app.js',
    instances: 1,
    autorestart: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
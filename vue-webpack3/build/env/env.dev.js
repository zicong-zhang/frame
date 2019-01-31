const prodEnv = require('./env.prod');

module.exports = Object.assign(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"test.alasga.cn"'
})

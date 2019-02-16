import productionConfig from './prod.env';

export default Object.assign(productionConfig, {
  NODE_ENV: '"development"',
  API_ROOT: '"https://www.baidu.com"'
})

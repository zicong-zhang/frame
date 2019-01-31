const loaders = require('./loaders').loaders;

const rules = Object.keys(loaders).map(key => loaders[key]);

// console.log('rules:_____', rules);

module.exports = rules;

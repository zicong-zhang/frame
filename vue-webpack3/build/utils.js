const path = require('path');
const chalk = require('chalk');

const config = require('./config');

exports.resolve = param => path.resolve(__dirname, '../', param);

exports.assetsPath = path => `${config.assetsDirname}/${path}`;

// https://www.npmjs.com/package/chalk
exports.log = (color, text) => console.log(chalk[color](text));

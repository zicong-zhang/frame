process.env.NODE_ENV = 'production';

const ora = require('ora');
const rm = require('rimraf');
const chalk = require('chalk');
const webpack = require('webpack');

const { resolve } = require('./utils');
const productionConfig = require('./webpack.prod.conf');


const spinner = ora({
  color: 'blue',
  text: 'building for production...'
})
spinner.start();

rm(resolve('dist'), err => {
  if (err) throw err

  webpack(productionConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    
    console.log(chalk.cyan(`  ${new Date().toLocaleString()} \n`))
    
    process.stdout.write(stats.toString({
      colors: false,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  打包失败\n'))
      process.exit(1)
    }

    console.log(chalk.green('  Build Finish.\n'))
  })
})

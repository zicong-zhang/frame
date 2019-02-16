import path from 'path';
import chalk from 'chalk';


export const resolve = _path => path.resolve(__dirname, '../', _path);

export const assetPath = _path => `static/${_path}`;

// https://www.npmjs.com/package/chalk
export const log = (color = 'yellow', text) => console.log(chalk[color](text));

export const isDev = (yes, no) => {
  return (
    process.env.NODE_ENV === 'development'
      ? yes
      : no
  )
}

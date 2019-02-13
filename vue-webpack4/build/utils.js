import path from 'path';


export const resolve = _path => path.resolve(__dirname, '../', _path);

export const assetPath = _path => `static/${_path}`;


// module.exports

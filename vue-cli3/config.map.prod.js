const a = {
  mode: 'production',
  context: 'G:\\my-projects\\frame\\vue-cli3',
  devtool: false,
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: 'G:\\my-projects\\frame\\vue-cli3\\dist',
    filename: 'js/[name].[contenthash:8].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[contenthash:8].js'
  },
  resolve: {
    alias: {
      '@': 'G:\\my-projects\\frame\\vue-cli3\\src',
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '.js',
      '.jsx',
      '.vue',
      '.json'
    ],
    modules: [
      'node_modules',
      'G:\\my-projects\\frame\\vue-cli3\\node_modules',
      'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_@vue_cli-service@3.1.4@@vue\\cli-service\\node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_@vue_cli-plugin-babel@3.1.1@@vue\\cli-plugin-babel\\node_modules',
      'node_modules',
      'G:\\my-projects\\frame\\vue-cli3\\node_modules',
      'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_@vue_cli-service@3.1.4@@vue\\cli-service\\node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('cache-loader') */
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '09fd8171'
            }
          },
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              },
              cacheDirectory: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '09fd8171'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          /* config.module.rule('images').use('url-loader') */
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          /* config.module.rule('svg').use('file-loader') */
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          /* config.module.rule('media').use('url-loader') */
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          /* config.module.rule('fonts').use('url-loader') */
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        use: [
          /* config.module.rule('pug').use('pug-plain-loader') */
          {
            loader: 'pug-plain-loader'
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-resources-loader') */
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: './src/sass/_var.scss'
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-resources-loader') */
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: './src/sass/_var.scss'
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-resources-loader') */
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: './src/sass/_var.scss'
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-resources-loader') */
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: './src/sass/_var.scss'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              },
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('extract-css-loader') */
              {
                loader: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\_mini-css-extract-plugin@0.4.5@mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  publicPath: '../'
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function (css, result) {
                        var oldCssText = css.toString();
                        var px2remIns = new Px2rem(options);
                        var newCssText = px2remIns.generateRem(oldCssText);
                        var newCssObj = postcss.parse(newCssText);
                        result.root = newCssObj;
                      },
                    function plugin(css, result) {
                        var prefixes = loadPrefixes({
                          from: css.source && css.source.input.file,
                          env: options.env
                        });
                        timeCapsule(result, prefixes);

                        if (options.remove !== false) {
                          prefixes.processor.remove(css, result);
                        }

                        if (options.add !== false) {
                          prefixes.processor.add(css, result);
                        }
                      }
                  ]
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.jsx?$/,
        exclude: [
          filepath => {
                      // always transpile js in vue files
                      if (/\.vue\.jsx?$/.test(filepath)) {
                        return false
                      }
                      // exclude dynamic entries from cli-service
                      if (filepath.startsWith(cliServicePath)) {
                        return true
                      }
                      // check if this is something the user explicitly wants to transpile
                      if (options.transpileDependencies.some(dep => {
                        if (typeof dep === 'string') {
                          return filepath.includes(path.normalize(dep))
                        } else {
                          return filepath.match(dep)
                        }
                      })) {
                        return false
                      }
                      // Don't transpile node_modules
                      return /node_modules/.test(filepath)
                    }
        ],
        use: [
          /* config.module.rule('js').use('cache-loader') */
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: 'G:\\my-projects\\frame\\vue-cli3\\node_modules\\.cache\\babel-loader',
              cacheIdentifier: '5a737471'
            }
          },
          /* config.module.rule('js').use('thread-loader') */
          {
            loader: 'thread-loader'
          },
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      {
        options: {
          test: /\.js(\?.*)?$/i,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: false,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            output: {
              comments: /^\**!|@preserve|@license|@cc_on/i
            },
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"production"',
          VUE_APP_CLI_UI_URL: '""',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          error => {
            if (error.webpackError) {
              const message = typeof error.webpackError === 'string'
                ? error.webpackError
                : error.webpackError.message || ''
              for (const { re, msg, type } of rules) {
                const match = message.match(re)
                if (match) {
                  return Object.assign({}, error, {
                    // type is necessary to avoid being printed as defualt error
                    // by friendly-error-webpack-plugin
                    type,
                    shortMessage: msg(error, match)
                  })
                }
              }
              // no match, unknown webpack error without a message.
              // friendly-error-webpack-plugin fails to handle this.
              if (!error.message) {
                return Object.assign({}, error, {
                  type: 'unknown-webpack-error',
                  shortMessage: message
                })
              }
            }
            return error
          }
        ],
        additionalFormatters: [
          errors => {
            errors = errors.filter(e => e.shortMessage)
            if (errors.length) {
              return errors.map(e => e.shortMessage)
            }
          }
        ]
      }
    ),
    /* config.plugin('extract-css') */
    new MiniCssExtractPlugin(
      {
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      }
    ),
    /* config.plugin('optimize-css') */
    new OptimizeCssnanoPlugin(
      {
        sourceMap: false,
        cssnanoOptions: {
          preset: [
            'default',
            {
              mergeLonghand: false,
              cssDeclarationSorter: false
            }
          ]
        }
      }
    ),
    /* config.plugin('hash-module-ids') */
    new HashedModuleIdsPlugin(
      {
        hashDigest: 'hex'
      }
    ),
    /* config.plugin('named-chunks') */
    new NamedChunksPlugin(
      chunk => {
                  if (chunk.name) {
                    return chunk.name
                  }

                  const hash = require('hash-sum')
                  const joinedHash = hash(
                    Array.from(chunk.modulesIterable, m => m.id).join('_')
                  )
                  return `chunk-` + joinedHash
                }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        templateParameters: (compilation, assets, pluginOptions) => {
                // enhance html-webpack-plugin's built in template params
                let stats
                return Object.assign({
                  // make stats lazy as it is expensive
                  get webpack () {
                    return stats || (stats = compilation.getStats().toJson())
                  },
                  compilation: compilation,
                  webpackConfig: compilation.options,
                  htmlWebpackPlugin: {
                    files: assets,
                    options: pluginOptions
                  }
                }, resolveClientEnv(options, true /* raw */))
              },
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          collapseBooleanAttributes: true,
          removeScriptTypeAttributes: true
        },
        template: 'G:\\my-projects\\frame\\vue-cli3\\public\\index.html'
      }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        include: 'asyncChunks'
      }
    ),
    /* config.plugin('copy') */
    new CopyWebpackPlugin(
      [
        {
          from: 'G:\\my-projects\\frame\\vue-cli3\\public',
          to: 'G:\\my-projects\\frame\\vue-cli3\\dist',
          toType: 'dir',
          ignore: [
            'index.html',
            '.DS_Store'
          ]
        }
      ]
    )
  ],
  entry: {
    app: [
      './src/main.js'
    ]
  },
  externals: {
    echarts: 'echarts'
  }
}

const newLocal = {
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
};
const a = {
  mode: 'development',
  context: 'G:\\my-projects\\frame\\vue-cli3',
  devtool: 'cheap-module-eval-source-map',
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
    filename: '[name].js',
    publicPath: '/',
    globalObject: 'this'
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
              cacheIdentifier: 'cb6e9d02'
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
              cacheIdentifier: 'cb6e9d02'
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
              /* config.module.rule('css').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
              newLocal
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('css').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('css').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('postcss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('postcss').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('postcss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('postcss').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('scss').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('scss').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('sass').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('sass').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('sass').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('sass').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('less').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('less').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('less').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('less').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('stylus').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('stylus').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('stylus').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              /* config.module.rule('stylus').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
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
                    function(css, result) {
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
              cacheIdentifier: '354bed64'
            }
          },
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
        VUE_APP_CLI_UI_URL: '""',
        VUE_APP_CURRENTMODE: '"production"',
        BASE_URL: '"/"'
      }
    }),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin({
      additionalTransformers: [
        error => {
          if (error.webpackError) {
            const message = typeof error.webpackError === 'string' ?
              error.webpackError :
              error.webpackError.message || ''
            for (const {
                re,
                msg,
                type
              } of rules) {
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
    }),
    /* config.plugin('hmr') */
    new HotModuleReplacementPlugin(),
    /* config.plugin('no-emit-on-errors') */
    new NoEmitOnErrorsPlugin(),
    /* config.plugin('progress') */
    new ProgressPlugin(),
    /* config.plugin('html') */
    new HtmlWebpackPlugin({
      templateParameters: (compilation, assets, pluginOptions) => {
        // enhance html-webpack-plugin's built in template params
        let stats
        return Object.assign({
          // make stats lazy as it is expensive
          get webpack() {
            return stats || (stats = compilation.getStats().toJson())
          },
          compilation: compilation,
          webpackConfig: compilation.options,
          htmlWebpackPlugin: {
            files: assets,
            options: pluginOptions
          }
        }, resolveClientEnv(options, true /* raw */ ))
      },
      template: 'G:\\my-projects\\frame\\vue-cli3\\public\\index.html'
    }),
    /* config.plugin('preload') */
    new PreloadPlugin({
      rel: 'preload',
      include: 'initial',
      fileBlacklist: [
        /\.map$/,
        /hot-update\.js$/
      ]
    }),
    /* config.plugin('prefetch') */
    new PreloadPlugin({
      rel: 'prefetch',
      include: 'asyncChunks'
    }),
    /* config.plugin('copy') */
    new CopyWebpackPlugin(
      [{
        from: 'G:\\my-projects\\frame\\vue-cli3\\public',
        to: 'G:\\my-projects\\frame\\vue-cli3\\dist',
        toType: 'dir',
        ignore: [
          'index.html',
          '.DS_Store'
        ]
      }]
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

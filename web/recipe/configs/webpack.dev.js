const commonConfig = require('./webpack.common.js')
const merge = require('webpack-merge')
const rules = require('./webpack.rules.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const paths = require('./webpack.paths.js');
const path = require('path');

const config = env => {
  return merge (
    commonConfig,
    {
      module: {
        rules: [
          rules.babelEslint,
          rules.eslint,
          rules.file,
          rules.sassLoader,
          rules.vue
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'MumuLala Recipe',
          template: path.resolve(paths.src, 'index.html'),
          inject: true,
        }),
        new VueLoaderPlugin()
      ],
      mode: 'development'
    }
  )
}

module.exports = config

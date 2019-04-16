const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const rules = require('./webpack.rules.js')

const config = env => {
  return merge(
    commonConfig,
    {
      module: {
        rules: [
          rules.babelEslint,
          rules.vue
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
          }
        }),
        new HtmlWebpackPlugin({
          title: 'MumuLala Recipe',
          template: 'src/index.html'
        }),
        new VueLoaderPlugin()
      ],
      optimization: {
        minimizer: [
          new UglifyJSPlugin({
            uglifyOptions: { compress: { drop_console: true } }
          })
        ]
      },
      mode: 'production'
    }
  )
}

module.exports = config

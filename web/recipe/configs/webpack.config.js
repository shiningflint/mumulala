const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
          rules.extractCssLoader,
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
        new MiniCssExtractPlugin({
          chunkFilename: "style.[contenthash].css",
          filename: 'style.[hash].css'
        }),
        new VueLoaderPlugin()
      ],
      optimization: {
        minimizer: [
          new UglifyJSPlugin({
            uglifyOptions: { compress: { drop_console: true } }
          })
        ],
        runtimeChunk: {
          name: "manifest"
        }
      },
      mode: 'production'
    }
  )
}

module.exports = config

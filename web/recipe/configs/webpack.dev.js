const commonConfig = require('./webpack.common.js')
const merge = require('webpack-merge')
const rules = require('./webpack.rules.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = env => {
  return merge (
    commonConfig,
    {
      module: {
        rules: [
          rules.babelEslint,
          rules.eslint,
          rules.sassLoader,
          rules.vue
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'MumuLala Recipe',
          template: 'src/index.html'
        }),
        new VueLoaderPlugin()
      ],
      mode: 'development'
    }
  )
}

module.exports = config

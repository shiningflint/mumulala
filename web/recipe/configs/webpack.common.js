const path = require('path')
const paths = require('./webpack.paths.js')

module.exports = {
  entry: {
    app: [path.resolve(paths.src, 'index.js')]
  },
  output: {
    path: path.resolve(paths.root, 'dist'),
    filename: '[name].[contenthash].js'
  },
  resolve: {
    alias: Object.assign({}, paths, {
      'vue$': 'vue/dist/vue.esm.js',
    }),
    extensions: ['.js', '.css', '.scss', '.vue']
  },
}

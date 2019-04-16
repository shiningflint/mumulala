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
}

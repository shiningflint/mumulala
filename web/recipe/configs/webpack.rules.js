exports.babelEslint = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: "babel-loader"
}

exports.vue = {
  test: /\.vue$/,
  exclude: /node_modules/,
  loader: "vue-loader"
}

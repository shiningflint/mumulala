const MiniCssExtractPlugin = require('mini-css-extract-plugin')

exports.babelEslint = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: ['babel-loader', 'eslint-loader']
}

exports.vue = {
  test: /\.vue$/,
  exclude: /node_modules/,
  loader: 'vue-loader'
}

exports.sassLoader = {
  test: /\.(sass|scss)$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ]
}

exports.extractCssLoader = {
  test: /\.(sass|scss|css)$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: [
          require('autoprefixer')
        ]
      }
    },
    'sass-loader'
  ]
};

exports.file = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  exclude: /node_modules/,
  loader: 'file-loader',
  options: {
    name(file) {
      if (process.env.NODE_ENV === 'development') {
        return '[path][name].[ext]';
      }

      return '[hash].[ext]';
    },
  },
};

exports.eslint = {
  enforce: 'pre',
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  exclude: [/node_modules/, /configs/]
};

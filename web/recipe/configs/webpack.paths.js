const path = require('path')
const root = path.resolve(__dirname, '..')
const src = path.resolve(root, 'src')
const api = path.resolve(src, 'api')
const assets = path.resolve(src, 'assets')
const components = path.resolve(src, 'components')
const stylesheets = path.resolve(src, 'stylesheets')
const views = path.resolve(src, 'views')

module.exports = {
  'vue$': 'vue/dist/vue.esm.js',
  'public': '/',
  src,
  api,
  assets,
  components,
  stylesheets,
  views,
  root,
}

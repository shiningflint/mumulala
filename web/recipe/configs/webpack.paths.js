const path = require('path')
const root = path.resolve(__dirname, '..')
const src = path.resolve(root, 'src')
const components = path.resolve(src, 'components')
const stylesheets = path.resolve(src, 'stylesheets')
const views = path.resolve(src, 'views')

module.exports = {
  'public': '/',
  src,
  components,
  stylesheets,
  views,
  root
}

const path = require('path');
const root = path.resolve(__dirname, '..');
const src = path.resolve(root, 'src');

module.exports = {
  'public': '/',
  src,
  root
}

module.exports = {
  root: true,
  parserOptions: {
   sourceType: 'module',
   parser: 'babel-eslint',
  },
  env: {
   browser: true,
  },
  plugins: ["vue"],
  extends: ["plugin:vue/base", 'standard'],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'indent': 0,
    'no-var': "error",
    'prefer-const': "error",
    'semi': [1, 'never']
  },
}

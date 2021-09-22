module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'standard'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'vue/script-indent': ['warn', 2],
    'vue/html-indent': ['warn', 2]
  }
}

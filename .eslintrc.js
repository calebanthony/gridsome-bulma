const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:gridsome/recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-indent': ['error', 2],
    'vue/no-v-html': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['^~', path.resolve(__dirname, './src')],
        ],
        extensions: ['.js', '.vue'],
      },
    },
  },
  plugins: [
    'gridsome',
  ],
};

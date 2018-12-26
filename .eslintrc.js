module.exports = {
  extends: ['airbnb-base', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0,
  },
  plugins: ['jsx-a11y'],
  env: {
    browser: true,
    node: true,
  },
};

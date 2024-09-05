const airbnbConfig = require('eslint-config-airbnb');
const prettierConfig = require('eslint-config-prettier');
const nextConfig = require('eslint-config-next/core-web-vitals');
const prettierPlugin = require('eslint-plugin-prettier');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const importPlugin = require('eslint-plugin-import');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');

module.exports = [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      prettier: prettierPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    rules: {
      ...airbnbConfig.rules,
      ...prettierConfig.rules,
      ...nextConfig.rules,
      'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'import/prefer-default-export': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'error',
      quotes: ['error', 'single'],
    },
  },
];

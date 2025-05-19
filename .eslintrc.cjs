module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      files: ['**/*.jsx'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:storybook/recommended',
      ],
      plugins: ['react'],
      rules: {
        semi: ['error', 'never'],
        maxlen: ['error', { code: 200 }],
      },
    },
  ],
}

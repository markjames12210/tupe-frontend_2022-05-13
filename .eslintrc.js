module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    semi: 'warn',
    'no-console': 'warn',
    'prettier/prettier': 'warn',
    'no-else-return': 'warn',
    'no-nested-ternary': 'warn',
    'consistent-return': 'warn',
    'eqeqeq': 'warn',
    'prefer-template': 'warn',
    'array-callback-return': 'warn',
    'no-param-reassign': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    // 'perfect-const': 'warn',
    'no-shadow': 'warn',
    'no-useless-escape': 'warn',
    camelcase: 'warn',
    'vars-on-top': 'warn',
    'import/order': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'no-undef': 'warn',
    'no-var': 'warn',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'warn',
    'newline-before-return': 'warn',
    'react/prop-types': 'off',
    'linebreak-style': 'off',
    'prettier/prettier': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'jsx-quotes': ['warn', 'prefer-single'],
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'import/no-unresolved': ['warn', { caseSensitive: false }],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
  },
};

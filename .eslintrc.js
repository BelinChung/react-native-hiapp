module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  extends: 'standard',
  plugins: ['react', 'react-hooks', 'react-native'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-prototype-builtins': 0,
    'no-unused-vars': 0,
    'comma-dangle': 'off',
    'generator-star-spacing': 0,
    'no-new': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'semi': [2, 'never'],
    'indent': ['error', 2, {SwitchCase: 1}],
    'no-var': 2,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'prefer-const': [
      2,
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'eqeqeq': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    // React Plugin
    // The following rules are made available via `eslint-plugin-react`.
    'react/display-name': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-no-comment-textnodes': 1,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 0,
    'react/no-multi-comp': 0,
    'react/no-string-refs': 1,
    'react/no-unknown-property': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 1,
    'react/wrap-multilines': 0,

    // React-Hooks Plugin
    // The following rules are made available via `eslint-plugin-react-hooks`
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // React-Native Plugin
    // The following rules are made available via `eslint-plugin-react-native`
    'react-native/no-inline-styles': 0,
  },
  globals: {
    fetch: false
  }
};

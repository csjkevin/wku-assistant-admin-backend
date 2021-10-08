module.exports = {
  extends: ['eslint-config-egg/typescript', 'plugin:unicorn/recommended', 'prettier'],
  rules: {
    strict: 0,
    'no-return-await': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'unicorn/prevent-abbreviations': 0,
    'unicorn/prefer-module': 0,
    'unicorn/no-null': 0,
    'unicorn/prefer-node-protocol': 0,
  },
};

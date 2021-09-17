module.exports = {
  extends: ['eslint-config-egg', require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    strict: 0,
    'no-return-await': 0,
  },
};

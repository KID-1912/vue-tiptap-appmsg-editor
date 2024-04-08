module.exports = {
  root: true,
  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
    requireConfigFile: false,
    allowImportExportEverywhere: false,
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jquery: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "./eslintrc-auto-import.json",
  ],
  rules: {
    "prettier/prettier": "warn",
    "no-unused-vars": "off",
    "vue/multi-word-component-names": "off",
  },
};

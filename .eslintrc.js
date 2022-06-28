module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:prettier/recommended", "eslint:recommended", "prettier", "plugin:react/recommended", "airbnb"],
  rules: {
    "no-console": "off"
  }
};

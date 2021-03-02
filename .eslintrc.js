module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "plugin:vue/strongly-recommended"
  ],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "no-console": 0,
  },
};

module.exports = {
  parser: "@typescript-eslint/parser",

  extends: ["turbo", "google", "prettier"],
  plugins: ["@typescript-eslint"],

  rules: {
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-shadow": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message: "Don't use `for A in B`",
      },
      {
        selector: "WithStatement",
        message: "Don't use `with`",
      },
    ],
    "import/prefer-default-export": "off",
    "require-jsdoc": "off",
  },
  ignorePatterns: ["**/lib/**/*", "**/dist/**/*"],
};

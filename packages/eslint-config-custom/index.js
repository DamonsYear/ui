module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["next", "turbo", "plugin:react/recommended", "google", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      settings: {
        react: {
          version: "^18.2.0",
        },
      },
      plugins: ["react", "@typescript-eslint"],
      rules: {
        "no-unused-vars": "off",
        "react/prop-types": "off",
        "require-jsdoc": "off",
      },
    },
  ],
};

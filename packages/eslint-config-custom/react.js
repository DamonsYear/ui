module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:react/recommended", "eslint-config-custom"],
  rules: {
    "react/require-default-props": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
  },
};

module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom/react"],
  settings: {
    react: {
      version: "^18.2.0",
    },
  },
};

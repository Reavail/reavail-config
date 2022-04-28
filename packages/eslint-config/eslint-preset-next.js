module.exports = {
  extends: [
    "next",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/all",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};

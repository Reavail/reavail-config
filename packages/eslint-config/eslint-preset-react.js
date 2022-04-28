module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/all",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "react/jsx-use-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "jest/prefer-expect-assertions": [
      "warn",
      { onlyFunctionsWithAsyncKeyword: true}
    ]
  }
}

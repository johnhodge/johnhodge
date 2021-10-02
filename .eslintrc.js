module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "import/no-extraneous-dependencies": "off", // temporarily off until we use prop-types
    "react/prop-types": "off", // temporarily off https://stackoverflow.com/questions/63254512/does-gatsby-remove-proptypes-by-default
    "react/no-danger": "off", // temporarily off https://stackoverflow.com/questions/29044518/safe-alternative-to-dangerouslysetinnerhtml
    "no-nested-ternary": "off", // temporarily off https://stackoverflow.com/questions/37312122/how-to-do-a-nested-if-else-statement-in-reactjs-jsx
    "import/no-named-as-default": "off", // temporarily off https://stackoverflow.com/questions/44437203/how-do-i-resolve-eslint-import-no-named-as-default
    "array-callback-return": "off", // temporarily off https://stackoverflow.com/questions/48163744/expected-to-return-a-value-in-arrow-function-array-callback-return-why
  },
};

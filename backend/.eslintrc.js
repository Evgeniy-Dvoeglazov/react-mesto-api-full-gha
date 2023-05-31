module.exports = {
  env: {
    es2021: true
  },
  extends: [
    "airbnb-base"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    quotes: [
      "error",
      "double"
    ],
    "comma-dangle": [
      "error",
      "never"],
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
    "func-names": ["error", "never"]
  }
};

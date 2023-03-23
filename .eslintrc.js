module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: [
    "eslint-plugin-react",
    "eslint-plugin-react-hooks",
    "react-hooks",
    "@typescript-eslint",
  ],
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react-hooks/recommended"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    // You can do more rule customizations here...
  },
};

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports'],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier", "plugin:react-hooks/recommended", "plugin:storybook/recommended"],
  rules: {
    "unused-imports/no-unused-imports": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "off"
  },
  env: {
    node: true
  }
};
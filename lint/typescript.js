const typeScriptRules = {
  "@typescript-eslint/semi": ["error", "never"],
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/space-before-function-paren": ["warn", "always"],
  "@typescript-eslint/comma-dangle": ["warn", "only-multiline"],
  "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  "@typescript-eslint/ban-ts-comment": ["off"],
  "@typescript-eslint/naming-convention": ["off"],
  "@typescript-eslint/indent": ["off"],
  "@typescript-eslint/no-use-before-define": [
    "error",
    {
      functions: false,
      classes: false,
    },
  ],
  "@typescript-eslint/no-non-null-assertion": ["off"],
}

export default typeScriptRules

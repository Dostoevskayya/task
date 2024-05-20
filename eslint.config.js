import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import typeScriptRules from "./lint/typescript.js"
import vueRules from "./lint/vue.js"

export default [
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        sourceType: "module",
        parser: "@typescript-eslint/parser",
      },
    },
    rules: {
      ...typeScriptRules,
      ...vueRules,
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
]

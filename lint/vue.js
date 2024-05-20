const vueRules = {
  "vue/max-attributes-per-line": ["off"],
  "vue/no-unused-components": ["warn"],
  "vue/component-tags-order": [
    "error",
    {
      order: ["template", "script", "style"],
    },
  ],
  "vue/multi-word-component-names": ["off"],
  "vue/no-v-text-v-html-on-component": ["off"],
  "vue/padding-line-between-blocks": ["error", "always"],
  "vue/new-line-between-multi-line-property": [
    "error",
    {
      minLineOfMultilineProperty: 2,
    },
  ],
  "vue/valid-v-slot": [
    "error",
    {
      allowModifiers: true,
    },
  ],
  "vue/max-len": [
    "error",
    {
      code: 100,
      template: 100,
      tabWidth: 2,
      ignorePattern: "",
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
      ignoreHTMLAttributeValues: true,
      ignoreHTMLTextContents: true,
    },
  ],
}

export default vueRules

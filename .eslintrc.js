module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
  },
  "ignorePatterns": [
    "*.d.ts",
    "build",
    "coverage/",
    "node_modules/",
    "src/serviceWorker.js",
    "src/**/__tests__/**",
  ],
  "plugins": [
    "react",
    "@typescript-eslint",
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  "rules": {
    // These are rules we will probably never try to enable
    "@typescript-eslint/camelcase": "Off",
    "@typescript-eslint/explicit-function-return-type": "Off",
    "@typescript-eslint/interface-name-prefix": "Off",
    "@typescript-eslint/no-explicit-any": "Off",
    "jest/expect-expect": "Off",
    "jest/no-disabled-tests": "Off",
    "jest/no-export": "Off",
    "no-case-declarations": "Off",
    "react/display-name": "Off",
    "react/no-unescaped-entities": "Off",

    // These are good rules we should re-enable if we can
    "@typescript-eslint/member-delimiter-style": "Off",
    "@typescript-eslint/no-inferrable-types": "Off",
    "no-extra-boolean-cast": "Off",
    "react/no-children-prop": "Off",
    "react/no-deprecated": "Off",

    // Consider adding
    // "sort-imports": "error",
    // "sort-keys": "error",
    // "sort-vars": "error",

    // Rules we add above the recommendations
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "accessor-pairs": "error",
    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": "error",
    "array-element-newline": ["error", "consistent"],
    "arrow-body-style": "error",
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "error",
    "block-scoped-var": "error",
    "block-spacing": "error",
    "brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
    "comma-spacing": "error",
    "comma-style": ["error", "last", { "exceptions": { "VariableDeclaration": true } }],
    "complexity": ["error", 9],
    "computed-property-spacing": "error",
    "consistent-this": "error",
    "default-case": "error",
    "default-param-last": "error",
    "eol-last": "error",
    "eqeqeq": "error",
    "func-call-spacing": "error",
    "func-name-matching": "error",
    "function-call-argument-newline": ["error", "consistent"],
    "function-paren-newline": ["error", "consistent"],
    "generator-star-spacing": ["error", "after"],
    "grouped-accessor-pairs": "error",
    "guard-for-in": "error",
    "indent": ["error", 2],
    "jsx-quotes": ["error", "prefer-single"],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "linebreak-style": "error",
    "lines-around-comment": "error",
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "max-classes-per-file": "error",
    "max-depth": "error",
    "max-len": ["error", { "code": 120 }],
    "max-lines": ["error", { "max": 385, "skipBlankLines": true, "skipComments": true }],
    "max-lines-per-function": ["error", 86],
    "max-nested-callbacks": "error",
    "max-params": ["error", 4],
    "max-statements": ["error", 20],
    "new-cap": "error",
    "new-parens": "error",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-await-in-loop": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-confusing-arrow": "error",
    "no-console": "error",
    "no-constructor-return": "error",
    "no-continue": "error",
    "no-div-regex": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": ["error", { "ignore": [0, 1, 2, 3, 4] }],
    "no-mixed-operators": "error",
    "no-multi-assign": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-plusplus": "error",
    "no-proto": "error",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-properties": "error",
    "no-restricted-syntax": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-use-before-define": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",
    "object-curly-newline": ["error", { "consistent": true }],
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
    "object-shorthand": "error",
    "one-var-declaration-per-line": "error",
    "operator-assignment": "error",
    "padded-blocks": ["error", "never"],
    "padding-line-between-statements": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": ["error", "consistent-as-needed"],
    "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "radix": "error",
    "rest-spread-spacing": "error",
    "semi-spacing": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": "error",
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": "error",
    "strict": "error",
    "switch-colon-spacing": "error",
    "symbol-description": "error",
    "template-curly-spacing": "error",
    "template-tag-spacing": "error",
    "unicode-bom": "error",
    "vars-on-top": "error",
    "wrap-iife": "error",
    "wrap-regex": "error",
    "yield-star-spacing": "error",
    "yoda": "error",
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    },
    "import/resolver": {
     "node": {
       "extensions": [".js", ".jsx", ".ts", ".tsx"],
     }
   }
  },
  "parser": "@typescript-eslint/parser"
}
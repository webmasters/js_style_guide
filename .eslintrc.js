module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    // "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "script",
    },
    "rules": {
        /* Official, in the books */

        /* General */
        "max-statements-per-line": "error",
        "semi": "error",
        "no-magic-numbers": ["error",
          {"ignore": [0, 1, 2, 3, 10]}],
        "space-infix-ops": "error",
        "no-multiple-empty-lines": "error",

        /* Variables & Constants */
        "no-undef": "error",
        "prefer-const": "error",
        "no-var": "error",

        /* Naming */
        "camelcase": "error",

        /* Blocks and Indention */
        "brace-style": [
          "error", "1tbs", { "allowSingleLine": true }
        ],
        "indent": ["error", 2],
        "keyword-spacing": "error",

        /* Functions */
        "max-statements": ["error", 10],

        /* Implicit, ie. not mentioned in the documented rules */
        "linebreak-style": ["error", "unix"],
        "eol-last": "error",
        "no-trailing-spaces": "error",

        "strict": ["error", "global"],

        "prefer-arrow-callback": "error",
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": ["error", {
                "after": true,
                "before": true
        }],

        "eqeqeq": "error",
        "dot-location": ["error", "property"],

        "no-unused-vars": "error",
        "no-const-assign": "error",

        "array-bracket-spacing": "error",
        "space-unary-ops": "error",
        "space-before-blocks": "error",

        "comma-spacing": "error",
        "comma-style": "error",
        "comma-dangle": "error"

/*
        "accessor-pairs": "error",
        "array-callback-return": "error",
        "arrow-body-style": "error",
        "block-scoped-var": "error",
        "callback-return": "error",
        "complexity": "error",
        "class-methods-use-this": "error",
        "computed-property-spacing": "error",
        "consistent-return": "error",
        "consistent-this": "error",
        "curly": "error",
        "default-case": "error",
        "dot-notation": "error",
        "func-call-spacing": "error",
        "func-names": "error",
        "guard-for-in": "error",
        "handle-callback-err": "error",
        "id-blacklist": "error",
        "id-length": "off",
        "id-match": "error",
        "init-declarations": "error",
        "key-spacing": "error",
        "line-comment-position": "error",
        "lines-around-comment": "error",
        "lines-around-directive": "error",
        "max-depth": "error",
        "max-len": "error",
        "max-lines": "error",
        "max-nested-callbacks": "error",
        "max-params": "error",
        "multiline-ternary": [
            "error",
            "never"
        ],
        "new-cap": "error",
        "new-parens": "error",
        "newline-after-var": [
            "error",
            "always"
        ],
        "newline-before-return": "error",
        "newline-per-chained-call": "error",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-catch-shadow": "error",
        "no-confusing-arrow": "off",
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
        "no-extra-parens": "error",
        "no-floating-decimal": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-inline-comments": "error",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-mixed-operators": "off",
        "no-mixed-requires": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-negated-condition": "error",
        "no-nested-ternary": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-path-concat": "error",
        "no-plusplus": "error",
        "no-process-env": "error",
        "no-process-exit": "error",
        "no-proto": "error",
        "no-prototype-builtins": "error",
        "no-restricted-globals": "error",
        "no-restricted-imports": "error",
        "no-restricted-modules": "error",
        "no-restricted-properties": "error",
        "no-restricted-syntax": "error",
        "no-return-assign": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-sync": "error",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-undefined": "error",
        "no-underscore-dangle": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": "error",
        "no-use-before-define": "error",
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-void": "error",
        "no-warning-comments": "error",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "object-curly-newline": "error",
        "object-curly-spacing": "error",
        "object-property-newline": "error",
        "object-shorthand": "error",
        "operator-assignment": "error",
        "operator-linebreak": "error",
        "padded-blocks": "error",
        "prefer-numeric-literals": "error",
        "prefer-reflect": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "quote-props": "error",
        "quotes": [
            "error",
            "double"
        ],
        "radix": "error",
        "rest-spread-spacing": "error",
        "semi-spacing": "error",
        "sort-imports": "error",
        "sort-keys": "error",

        "space-before-function-paren": "error",

        "space-in-parens": [
            "error",
            "never"
        ],

        "spaced-comment": "error",
        "symbol-description": "error",
        "template-curly-spacing": "error",
        "unicode-bom": [
            "error",
            "never"
        ],
        */
    }
};

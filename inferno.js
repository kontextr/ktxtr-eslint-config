module.exports = {
  "extends": [
    "plugin:inferno/recommended"
  ],
  "plugins": [
    "inferno"
  ],
  "rules": {
    "jsx-quotes": ["error", "prefer-single"],

    // Inferno specific
    "inferno/inferno-in-jsx-scope": "off",
    "inferno/jsx-curly-spacing": ["warn", {
      "when": "always",
      "children": { "when": "never" },
      "spacing": {
        "objectLiterals": "never"
      }
    }],
    "inferno/jsx-curly-brace-presence": ["warn", "never"],
    "inferno/jsx-wrap-multilines": ["warn", {
      "declaration": "parens-new-line",
      "assignment": "parens-new-line",
      "return": "parens-new-line",
      "arrow": "parens-new-line",
      "condition": "ignore",
      "logical": "ignore",
      "prop": "ignore"
    }],
  }
}

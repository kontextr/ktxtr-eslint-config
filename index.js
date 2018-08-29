module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  "parser": "babel-eslint",
  "plugins": [
    "compat"
  ],
  "rules": {

    // Styleguide specific
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "eol-last": ["warn", "always"],
    "no-warning-comments": "warn",
    "camelcase": "warn",
    "no-extra-parens": ["error", "all", { "ignoreJSX": "all" }],
    "no-confusing-arrow": ["error", { "allowParens": true }],
    "no-shadow": ["warn", { "builtinGlobals": true, "hoist": "functions", "allow": [ "name" ] }],
    "max-len": ["warn", {"code": 120, "ignoreUrls": true}],
    "padding-line-between-statements": [
      "warn",
      { "blankLine": "always", "prev": "*", "next": "return" },
      { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
      { "blankLine": "always", "prev": ["cjs-import", "import"], "next": "*" },
      { "blankLine": "any",    "prev": ["cjs-import", "import"], "next": ["cjs-import", "import"] },
      { "blankLine": "always", "prev": ["expression"], "next": ["const", "let", "var"] },
      { "blankLine": "any",    "prev": ["const", "let", "var"], "next": ["const", "let", "var", "export"] }
    ],
    "sort-imports": ["error", {
      "ignoreCase": true,
      "memberSyntaxSortOrder": ["none", "all", "single", "multiple"]
    }],

    // Error specific
    "compat/compat": "error",

    // Extend config overwrites
    "consistent-this": "off",
    "handle-callback-err": "off"
  }
};

module.exports = {
  "env": {
    "jest": true
  },
  "plugins": [
    "jest",
    "test-names"
  ],
  "overrides": [
    {
      "files": [ "**/*.test.js*"],
      "rules": {
        "max-nested-callbacks": ["error", { "max": 5 }],
        "max-statements": ["error", 25],

        "test-names/blacklist-word-in-test-name": [
          "error",
          { "words": ["should", "needs to"], "caseInsensitive": true }
        ],

        "jest/consistent-test-it": ["error", {"fn": "test"}],
        "jest/lowercase-name": ["error", { "ignore": ["describe"] }],
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/prefer-to-have-length": "error",
        "jest/prefer-to-be-null": "error",
        "jest/prefer-to-be-undefined": "error",
        "jest/valid-expect-in-promise": "error"
      }
    }
  ]
}

module.exports = `{
  "extends": "tslint:recommended",
    "rules": {
      "no-magic-numbers": true,
        "curly": true,
        "indent": [true, "spaces"],
        "quotemark": [true, "single", "avoid-escape"],
        "ordered-imports": [false],
        "trailing-comma": [true, {
          "multiline": "never",
          "singleline": "never"
        }],
        "variable-name": [true, "ban-keywords", "check-format", "allow-leading-underscore"],
        "max-classes-per-file": [true, 5],
        "no-var-requires": false,
        "array-type": [true, "generic"],
        "member-ordering": [false],
        "align": [false]
    }
}`;

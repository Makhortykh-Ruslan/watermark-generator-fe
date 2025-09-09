module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss"
  ],
  plugins: ["stylelint-order"],
  rules: {
    "max-nesting-depth": 3,
    "order/properties-alphabetical-order": true,
    "selector-class-pattern": "^[a-z0-9\\-]+$",
    "no-empty-source": null,
    "selector-pseudo-element-no-unknown": [
      true,
      {
        "ignorePseudoElements": ["ng-deep"]
      }
    ],
    "scss/at-extend-no-missing-placeholder": null,
    "selector-class-pattern": null
  }
};

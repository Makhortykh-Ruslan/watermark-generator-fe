module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss"
  ],
  plugins: ["stylelint-order"],
  rules: {
    "indentation": 2,
    "string-quotes": "single",
    "color-hex-case": "lower",
    "max-nesting-depth": 3,
    "order/properties-alphabetical-order": true,
    "selector-class-pattern": "^[a-z0-9\\-]+$",
    "no-empty-source": null
  }
};

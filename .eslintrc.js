module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react",
    "import",
    "jsx-a11y"
  ],
  "env": {
    "browser": true,
    "jest": true
  },
  "rules": {
    "no-underscore-dangle": 0,
    "react/forbid-prop-types": [1, {forbid: ['any', 'array']}],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]    
  }
};
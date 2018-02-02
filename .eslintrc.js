module.exports = {
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
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]    
  }
};
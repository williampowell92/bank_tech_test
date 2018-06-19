module.exports = {
  "plugins": ["jasmine"],
  "extends": "airbnb-base",
  "env": {
    "jasmine": true
  },
  "rules": {
    "no-underscore-dangle": 0,
    "no-proto": 0,
    "no-console": 0,
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }]
  }
};

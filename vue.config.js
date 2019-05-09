// vue.config.js
const path = require("path");

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: ['/Users/tanlinlin/Documents/myself/vue-cli-test/src/global.less']
    }
  }
};

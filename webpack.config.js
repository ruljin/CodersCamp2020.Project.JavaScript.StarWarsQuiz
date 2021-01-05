const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const path = require('path');

module.exports = merge.merge(commonConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'docs')
  }
});

const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge.merge(commonConfig, {
  mode: 'development',
  devServer: {
    port: 8080
  }
});

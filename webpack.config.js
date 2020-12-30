const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config.js');

const createHtmlWebpackPlugin = siteName =>
  new HtmlWebpackPlugin({
    template: `./src/pages/${siteName}/${siteName}.html`,
    inject: 'head',
    scriptLoading: 'defer',
    chunks: [`${siteName}`],
    filename: `${siteName}.html`
  });

module.exports = {
  entry: Object.fromEntries(
    config.SITES.map(siteName => [
      siteName,
      `./src/pages/${siteName}/${siteName}.js`
    ])
  ),
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: 'compressed'
              }
            }
          }
        ]
      }
    ]
  },
  plugins: config.SITES.map(createHtmlWebpackPlugin)
};
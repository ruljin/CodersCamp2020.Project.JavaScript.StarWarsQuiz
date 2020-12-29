const HtmlWebpackPlugin = require('html-webpack-plugin');

const createHtmlWebpackPlugin = siteName =>
  new HtmlWebpackPlugin({
    template: `./src/pages/${siteName}/${siteName}.html`,
    inject: 'head',
    scriptLoading: 'defer',
    chunks: [`${siteName}`],
    filename: `${siteName}.html`
  });

const sitesNames = ['index', 'about', 'contacts'];

module.exports = {
  entry: Object.fromEntries(
    sitesNames.map(siteName => [
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
  plugins: sitesNames.map(createHtmlWebpackPlugin)
};

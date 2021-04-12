const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.jsx",
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'main.js'
    },
    devServer: {
      contentBase: './dist',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        react: path.resolve('./node_modules/react')
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('./index.html'),
      }),
    ]
};
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'development',
  entry: [path.join(process.cwd(), 'src/index')],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(s?)css$/,
        use: [
          'style-loader', // 3. Creates style nodes from JS strings
          {
            loader: 'css-loader', // 2. Translates CSS into CommonJS
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              sourceMap: true,
            },
          },

          'sass-loader', // 1. Compiles Sass to CSS, using Node Sass by default
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
      template: 'src/index.html',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 8080,
    historyApiFallback: true,
    overlay: true,
  },
  performance: {
    hints: false,
  },
});

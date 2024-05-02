const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const hasBabelPreset = process.argv.includes('has-babel-preset');
const hasTsLoader = process.argv.includes('has-ts-loader');

module.exports = {
  entry: './src/index.tsx',
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            ...(hasBabelPreset ? {
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-typescript',
                  '@babel/preset-react',
                ]
              }
            } : {}),
          },
          ...(hasTsLoader ? [{ loader: 'ts-loader' }] : []),
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
};

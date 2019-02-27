const path = require('path')
// const ExtractTextPlugin = require("extract-text-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const extractSass = new ExtractTextPlugin({
//   filename: "./css/style.min.css",
//   disable: process.env.NODE_ENV === "development"
// })
const devMode = process.env.NODE_ENV !== 'production'

const miniExtractSass = new MiniCssExtractPlugin({
  // Options similar to the same options in webpackOptions.output
  // both options are optional
  filename: "[name].css",
  chunkFilename: "[id].css"
})

module.exports = {
  entry: {
    app: "./src/js/app.js",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }
    ]
  },
  plugins: [
    miniExtractSass
  ],
  devtool: 'source-map'
}

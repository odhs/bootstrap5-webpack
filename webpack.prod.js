/* Get the project path */
const path = require("path");

/* The common part of the webpack configuration dev and prod  */
const common = require("./webpack.common.js");

/* Permmit 2 webpack configurations, dev and prod */
const merge = require("webpack-merge");

/* Minimize the output file */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/* Clean the dist directory before generate again */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

/* Remove Comments */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // from JS

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].[contentHash].css",
    }),
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false, // remove JS comments
          }
        }
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif|jpeg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images",
          },
        },
      },
    ],
  },
});

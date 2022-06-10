const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { default: ESLintWebpackPlugin } = require("eslint-webpack-plugin");

module.exports = {
  resolve: {
    extensions: ["", ".js", ".jsx", ".es6"],
  },
  mode: "development",
  // eslint-disable-next-line no-undef
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
  },
  plugins: [
    // eslint-disable-next-line no-undef
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // eslint-disable-next-line no-undef
      path: path.resolve(__dirname, "src"),
      template: "./index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: 
        {
          loader: "babel-loader",


          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

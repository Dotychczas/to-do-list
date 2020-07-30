const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  entry: "./src/components/app.js", 
  output: {
   
    path: path.resolve(__dirname, "dist"),
    filename: "code.bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [{ test: /\.js$/, use: "raw-loader" }],
  },
  optimization: { minimizer: [new UglifyJsPlugin()] }, // 4
};

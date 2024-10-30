const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/freelancer/",
  },
  plugins: [
    new CopyWebpackPlugin([{ from: "./src/index.html", to: "index.html" }]),
    new CopyWebpackPlugin([{ from: "./src/style.css", to: "style.css" }]),
    new CopyWebpackPlugin([{ from: "./src/Contact.html", to: "Contact.html" }]),
    new CopyWebpackPlugin([{ from: "./src/contact.css", to: "contact.css" }]),
    new CopyWebpackPlugin([{ from: "./src/aboutus.html", to: "aboutus.html" }]),
    new CopyWebpackPlugin([{ from: "./src/aboutus.css", to: "aboutus.css" }]),
    new CopyWebpackPlugin([{ from: "./src/blog.html", to: "blog.html" }]),
    new CopyWebpackPlugin([{ from: "./src/blog.css", to: "blog.css" }]),
    new CopyWebpackPlugin([{ from: "./src/client.html", to: "client.html" }]),
    new CopyWebpackPlugin([{ from: "./src/freelencer.html", to: "freelencer.html" }]),
  ],
  devServer: { contentBase: path.join(__dirname, "dist"), compress: true },
};

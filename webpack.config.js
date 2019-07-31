const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";

  return {
    entry: {
      main: "./src/index.js"
    },
    output: {
      path: path.resolve(__dirname, "app"),
      filename: "index.js"
    },
    mode: argv.mode,
    devtool: isDevelopment
      ? "#eval-source-map" // For development
      : "source-map", // For production
    devServer: {
      port: 3001
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
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.css/,
          loaders: ["style-loader", "css-loader"],
          include: [
            __dirname + "/src/",
            __dirname + "/node_modules/codemirror/theme/monokai.css",
            __dirname + "/node_modules/codemirror/lib/codemirror.css"
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"]
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
  };
};

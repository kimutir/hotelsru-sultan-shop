const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@custom": path.resolve(__dirname, "./src/app/custom/"),
      "@pages": path.resolve(__dirname, "./src/app/pages/"),
      "@layouts": path.resolve(__dirname, "./src/app/layouts/"),
      "@utils": path.resolve(__dirname, "./src/app/utils/"),
      "@store": path.resolve(__dirname, "./src/store/"),
      "@elements": path.resolve(__dirname, "./src/app/elements/"),
      "@components": path.resolve(__dirname, "./src/app/components/"),
      "@containers": path.resolve(__dirname, "./src/app/containers/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "@teamsupercell/typings-for-css-modules-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            },
          },
        ],
      },
      {
        test: /\.png$/,
        use: "file-loader",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    historyApiFallback: true,
  },
};

const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (env, options) => {
  const mode = options.mode;
  return {
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
        "@utils": path.resolve(__dirname, "./src/utils/"),
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
          loader: "file-loader",
          options: {
            name() {
              if (mode === "production") {
                return "hotelsru-sultan-shop/[path][name].[ext]";
              }
              return "[name].[ext]";
            },
            // outputPath: path.resolve(__dirname, "./dist/images"),
          },
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
};

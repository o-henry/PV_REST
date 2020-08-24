const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".scss"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
          {
            loader: require.resolve("react-docgen-typescript-loader"),
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      // asset (image)
      {
        test: /\.(png|jpg|svg)$/,
        use: ["file-loader"],
      },
      // CSS Setting
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS

          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },

          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              implementation: require("node-sass"),
              sassOptions: {
                fiber: require("fibers"),
              },
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new Dotenv(),
  ],

  /* Router */
  devServer: {
    historyApiFallback: true,
    // proxy: {
    //   "/": "http://localhost:8000",
    // },
    // open: true,
    // compress: true,
    // hot: true,
    // port: 3000,
  },
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode: "development",
  // devtool: "source-map",
  entry: "./src/index.ts",
  devServer: {
    static: "./public"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", "..."]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      },
      {
        test: /\.js$/,
        loader: "source-map-loader",
        enforce: "pre"
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
        generator: {
          // put all generated assets into "dist/"
          filename: "assets/[name][ext]"
        }
      }
    ]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
    clean: true
  }
};

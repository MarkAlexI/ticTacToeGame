const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}) => ({
  mode: env.prod ? "production" : "development",
  entry: [
    path.resolve(__dirname, "./src/main.js")
  ].filter(Boolean),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        sideEffects: true,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              warnRuleAsWarning: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  stats: {
    loggingDebug: ["sass-loader"],
    errorDetails: true,
  },
});

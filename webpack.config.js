module.exports = {
  entry: "./script.js",
  output: {
    path: __dirname,
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}
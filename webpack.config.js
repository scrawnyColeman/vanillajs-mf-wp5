const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

module.exports = (_, argv) => ({
  output: {
    publicPath:
      argv.mode === "development"
        ? "http://localhost:8082/"
        : "https://vanillajs-mf-wp5-qqyf.vercel.app/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8082,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-typescript", "@babel/preset-env"],
          plugins: [["@babel/transform-runtime"]],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "vanilla_host",
      filename: "remoteEntry.js",
      remotes: {
        react: "react_mfe@https://react-mf-wp5-rk86.vercel.app/remoteEntry.js",
        vue: "vue_mfe@https://vue-mf-wp5-w9qx.vercel.app/remoteEntry.js",
        svelte:
          "svelte_mfe@https://svelte-mf-wp5-hl92.vercel.app/remoteEntry.js",
        solid: "solid_mfe@https://solid-mf-wp5-zyhb.vercel.app/remoteEntry.js",
      },
      exposes: {},
      shared: {
        ...deps,
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});

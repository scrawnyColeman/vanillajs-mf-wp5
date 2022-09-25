const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

const getRemote = (mfe) => {
  const remoteMap = {
    react: "https://mfe-react-scrawnycoleman.vercel.app/",
    vue: "https://mfe-vue-scrawnycoleman.vercel.app/",
    svelte: "https://mfe-svelte-scrawnycoleman.vercel.app/",
    solid: "https://mfe-solid-scrawnycoleman.vercel.app/",
  };

  return `${mfe}_mfe@${remoteMap[mfe]}remoteEntry.js`;
};

module.exports = (_, argv) => ({
  output: {
    publicPath:
      argv.mode === "development"
        ? "http://localhost:8082/"
        : "https://host-vanillajs.vercel.app/",
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
        react: getRemote("react"),
        vue: getRemote("vue"),
        svelte: getRemote("svelte"),
        solid: getRemote("solid"),
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

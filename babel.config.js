module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      ["module:react-native-dotenv"],
      [
        "babel-plugin-inline-import",
        {
          extensions: [".svg"],
        },
      ],
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            app: "./src/app",
            components: "./src/components",
            hooks: "./src/hooks",
            services: "./src/services",
            store: "./src/store",
            theme: "./src/theme",
            types: "./src/types",
            utils: "./src/utils",
            assets: "./assets",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};

// "@screens/*": ["./screens/*"],

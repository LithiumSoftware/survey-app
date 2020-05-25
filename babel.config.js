module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["react-native-paper/babel"],
      [
        "styled-components",
        { ssr: true, displayName: true, preprocess: false },
      ],
      ["graphql-tag"],
    ],
  };
};

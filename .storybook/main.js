const path = require("path");

module.exports = {
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "../app/"),
    };
    return config;
  },

  stories: [
    "../app/ui/**/*.stories.mdx",
    "../app/ui/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    { name: "storybook-addon-turbo-build" },
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
};

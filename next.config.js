/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withSvgr = require('next-svgr');

const nextConfig = {
  webpack(config) {
    const rules = [{}];

    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...rules],
      },
      node: {
        fs: 'empty',
      },
    };
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
};

const withTM = require('next-transpile-modules')(['react-use'], {
  unstable_webpack5: true,
});

module.exports = withPlugins([withFonts, withSvgr, withTM], nextConfig);

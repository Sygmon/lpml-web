module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.resolve.fallback = {
      ...config.resolve.fallback,

      fs: false,
    };

    return config;
  },
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

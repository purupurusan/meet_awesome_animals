/* eslint-disable */
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "./src")
    };
    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    config.node = {
      fs: 'empty',
      child_process: 'empty',
      net: 'empty',
      dns: 'empty',
      tls: 'empty',
    }
    return config;
  }
};

// module.exports = withPlugins([
//   [
//     withSass,
//     {
//       cssModules: true,
//       cssLoaderOptions: {
//         importLoaders: 1,
//         localIdentName: "[folder]__[name]__[local]___[hash:base64:5]"
//       },
//       sassLoaderOptions: {
//         includePaths: ["styles"],
//         data: "@import 'utils';"
//       }
//     }
//   ],
//   new Dotenv({
//     path: path.join(__dirname, '.env'),
//     systemvars: true
//   }),
//   [
//     {
//     target: 'serverless'
//     }
//   ]
// ]);


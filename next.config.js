const webpack = require('webpack');
require('dotenv').config();

// module.exports = {
//   webpack(cfg) {
//     const originalEntry = cfg.entry;
//     cfg.entry = async () => {
//       const entries = await originalEntry();

//       if (entries['main.js'] && !entries['main.js'].includes('./client/polyfills.js')) {
//         entries['main.js'].unshift('./client/polyfills.js');
//       }

//       return entries;
//     };

//     return cfg;
//   },
// };

module.exports = {
  webpack: (config) => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));

    return config;
  },
};

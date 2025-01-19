const { defineConfig } = require('@vue/cli-service');
const path = require('path'); 

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        vm: require.resolve('vm-browserify'),
      },
    },
  },
  chainWebpack: config => {
    config.plugin('copy').tap(([options]) => {
      if (options && options[0] && Array.isArray(options[0].patterns)) {
        options[0].patterns.push({
          from: path.resolve(__dirname, '_redirects'),
          to: path.resolve(__dirname, 'dist'),
          toType: 'dir',
        });
      }
      return [options];
    });
  },
  
});
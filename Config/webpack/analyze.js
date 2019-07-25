const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const webpack = require('./prod.js');

webpack.plugins.push(new BundleAnalyzerPlugin({
  analyzerPort: 8889,
}));
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(webpack);

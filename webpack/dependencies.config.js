var webpack = require('webpack');

var PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  performance: {
    hints: PRODUCTION ? 'warning' : false,
  },
  entry: {
    dependencies: Object.keys(require('../package.json').dependencies || {}),
  },
  output: {
    path: __dirname + '/../www/build',
    filename: 'dependencies.bundle.js',
    library: 'dependencies',
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'webpack/dependencies-manifest.generated.json',
      name: 'dependencies'
    }),
  ],
}

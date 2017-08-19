var webpack = require('webpack');
var path = require('path');
var TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

var PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/index.tsx',
  devtool: PRODUCTION ? false : 'eval-source-map',
  performance: {
    hints: PRODUCTION ? 'warning' : false,
  },
  output: {
    path: path.resolve('www/build'),
    publicPath: '/build/',
    filename: 'src.bundle.js',
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    plugins: [
      new TsConfigPathsPlugin(),
    ]
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.tsx?$/, use: 'awesome-typescript-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?-url!sass-loader',
      },
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./dependencies-manifest.generated.json')
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        tslint: {
          emitErrors: true,
          failOnHint: true
        }
      }
    }),
    new webpack.DefinePlugin({
      MODE: JSON.stringify(PRODUCTION ? 'production' : 'development')
    })
  ],
}

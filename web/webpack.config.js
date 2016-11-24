var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index',
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
    }, {
      test: /\.json$/,
      loaders: ['json-loader'],
    }],
    postLoaders: [
      { loader: 'transform/cacheable?brfs' }
    ],
  },
  output: {
    // This is where built modules are
    // written to disk.
    //
    // This is *required* even if we are
    // only using Webpack Dev Server and
    // never writing output bundles out
    // to disk.
    path: __dirname + '/public',

    // This is the filename of the single
    // outputted module.
    filename: 'bundle.js',

    // This is tells loaders how to reference
    // files in the browser. For example, for
    // loaders that embed <script> or <link>
    // tags, `publicPath` is used as the `href`
    // or `url()` to the file.
    //
    // It is also used by the Webpack Dev Server
    // to determine where to serve the output files
    // from.
    publicPath: '/public/',
  },
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  ],
}

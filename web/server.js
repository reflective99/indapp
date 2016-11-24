var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var request = require('request');
var cookieParser = require('cookie-parser');
var debug = require('debug')('web');
var devWebpackConfig = require('./webpack.config');
var envs = require('./envs');

var app = express();

var port = process.env.PORT || 3000;

var apiHost = process.env.API_HOST || 'localhost:9000';
var NODE_ENV = process.env.NODE_ENV || envs.DEVELOPMENT;

if (NODE_ENV === envs.DEVELOPMENT) {
  var compiler = webpack(devWebpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: devWebpackConfig.output.publicPath, // This must match `src` path in index.html
  }));
  app.use(webpackHotMiddleware(compiler));
}

if (NODE_ENV === envs.PRODUCTION) {
  app.use('/public', express.static('public'));
}
app.use('/assets', express.static('assets'));
app.use(cookieParser());

// Proxy to API-Backend server.
app.use('/api', function(req, res) {
  console.log('in proxy request');
  console.log('req: ' + req);
  console.log('res: ' + res);
  var token = req.cookies.token || '';
  var url = 'http://'
    + token
    + ':@'
    + apiHost
    + '/api'
    + req.url;
  debug('Proxying %s %s', req.method, url);
  req
    .pipe(request(url)).on('error', handleProxyError)
    .pipe(res);

  function handleProxyError(e) {
    console.error('Failed to proxy request:', e);
    res.send({ error: 'Internal server error' });
  }
})

app.get("*", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(error) {
  if (error) {
    console.error('Error! ', error);
    return;
  }
  console.info('----- API-SERVER: %s', apiHost);
  console.info('----- WEB-SERVER: %s', port);
});

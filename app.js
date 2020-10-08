var https = require('https'),
    http  = require('http'),
    httpProxy = require('./lib/http-proxy');

//
// Create a HTTP Proxy server with a HTTPS target
//
http.createServer(function(req, res) {
  proxy.web(req, res, { target: 'https://google.com' });
}).listen(process.env.PORT || 8888);

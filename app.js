var https = require('https'),
    http  = require('http'),
    util  = require('util'),
    httpProxy = require('./lib/http-proxy');

//
// Create a HTTP Proxy server with a HTTPS target
//
httpProxy.createProxyServer({
  target: 'https://google.com',
  agent  : https.globalAgent,
  headers: {
    host: 'google.com'
  }
}).listen(process.env.PORT || 8888);

util.puts('started http proxy server');

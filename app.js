var https = require('https'),
    http  = require('http'),
    httpProxy = require('./lib/http-proxy');

//
// Create a HTTP Proxy server with a HTTPS target
//
httpProxy.createProxyServer({
  target: 'https://google.com',
  agent  : https.globalAgent,
  headers: {
    host: 'https://node-youtube.herokuapp.com/'
  }
}).listen(process.env.PORT || 8888);

console.log('started http proxy server');

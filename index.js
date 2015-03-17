var fs = require('fs'),
  https = require('https'),
  httpProxy = require('http-proxy');

var target = 'http://localhost:9000';
var proxy = httpProxy.createProxyServer({target: target});

https.createServer({
	key: fs.readFileSync('server.key'),
	cert: fs.readFileSync('server.crt')
}, function(a, b){
	proxy.web(a,b);
}).listen(9001, function(err) {
	if (err) {
		console.log('Error serving https proxy request: %s', req);
	}
	console.log('Created https proxy. Forwarding requests from https://localhost:9001 to %s', target);
});

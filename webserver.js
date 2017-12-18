var http = require('http');
var url = require('url');

var a = 5;
var b = 10;

var body = `Fifteen is ${a + b} and\nnot ${2 * a + b}.`;

var fn = function(req, resp) {
	console.log(req.url);
	
	var urlStr = url.parse(req.url, true);
	
	console.log(urlStr);
	
	resp.writeHead(200, {
		'content-type': 'text/plain; charset=utf-8'
	});
	
	resp.write(body);
	resp.end('Hello ' + 3);
};

http.createServer(fn).listen(8888, '127.0.0.1');
console.log('WebServer running...');
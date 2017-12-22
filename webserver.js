var http = require('http');
var url = require('url');
var rp = require('request-promise');
var oxr = require('open-exchange-rates');
var fx = require('money');
var util = require('util');

// var a = 5;
// var b = 10;
//
// var body = `Fifteen is ${a + b} and\nnot ${2 * a + b}.`;
//
// var fn = function(req, resp) {
// 	console.log(req.url);
//
// 	var urlStr = url.parse(req.url, true);
//
// 	console.log(urlStr);
//
// 	resp.writeHead(200, {
// 		'content-type': 'text/plain; charset=utf-8'
// 	});
//
// 	resp.write(body);
// 	resp.end('Hello ' + 3);
// };
//
// http.createServer(fn).listen(8888, '127.0.0.1');
// console.log('WebServer running...');


// var options = {
//     uri: 'https://api.openfintech.io/v1/banks',
//     headers: {
//         'Accept': 'application/vnd.api+json'
//     },
// 	json: true
// };
//
// // 'http://api.openweathermap.org/data/2.5/weather?q=London'
// rp('https://ipsidekick.com/95.91.229.217')
//     .then(function (htmlString) {
//         // Process html...
//         //console.dir(util.format(htmlString));
//         console.log(util.inspect(htmlString, true, null));
//     })
//     .catch(function (err) {
//         // Crawling failed...
//         console.error(err);
//     });

oxr.set({ app_id: '468ab15700f846789d275bf5bc1328bd' });

oxr.latest(function() {
    // You can now use `oxr.rates`, `oxr.base` and `oxr.timestamp`
    // Apply exchange rates and base rate to `fx` library object:
    // oxr.base = 'EUR';
	console.info(oxr.rates);
    console.info('####');

    console.info(oxr.base);

    fx.rates = oxr.rates;
    fx.base = oxr.base;

    // money.js is ready to use:
    let res = fx(1).from('EUR').to('CHF');

    console.info(res);
});
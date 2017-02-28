var http= require('http');

http.createServer(function (req, res) {
	res.writeHead(200,{'content-type': 'text/plain'})
	res.end('I just set up my first node server .. hoorah!!!\n');
}).listen(1337,'127.0.0.1');

console.log('Server running at http://localhost:1337/');

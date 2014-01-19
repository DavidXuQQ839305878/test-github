var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

#test
console.log("hihihi! ");
console.log("hello,my world!");
console.log("hello!hello!");

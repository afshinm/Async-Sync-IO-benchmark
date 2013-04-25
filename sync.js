var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {


  var stats = fs.statSync('sample.txt');
  var fd = fs.openSync('sample.txt', 'r');
  if(!fd) {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end();
  }
  var buffer = new Buffer(stats.size);
  var readFile = fs.readSync(fd, buffer, 0, buffer.length, null)
  var data = buffer.toString("utf8", 0, buffer.length);

  if(!data) {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end();
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data);
  }

  fs.closeSync(fd);

}).listen(8081, '127.0.0.1');
console.log('Server is ready on port 8081.');
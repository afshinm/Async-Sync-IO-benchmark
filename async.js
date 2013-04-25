var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {



  fs.stat('sample.txt', function(error, stats) {
    fs.open('sample.txt', "r", function(error, fd) {
      if(error) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end();
        return;
      }
      var buffer = new Buffer(stats.size);
      fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
        var data = buffer.toString("utf8", 0, buffer.length);

        if(!data) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end(data);
        }

        fs.close(fd);
      });
    });
  });

}).listen(8080, '127.0.0.1');
console.log('Server is ready on port 8080.');
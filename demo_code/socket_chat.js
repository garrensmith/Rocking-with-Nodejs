var net = require('net');

var  sockets = [];

var server = net.createServer(function(socket) {;
  socket.write("Welcome to the Socket chat logger\n");

  sockets.push(socket);

  socket.on('data', function (data) {
    sockets.forEach(function (client) {
      client.write(client.remoteAddress + "> ");
      client.write(data);
    });
   
  });

  socket.on('end', function (d) {
    var i = sockets.indexOf(socket); 
    sockets.splice(i, 1);
  });

}).listen(8124, 'localhost');


console.log("Socket chat listening on 10.14.252.252 8124");







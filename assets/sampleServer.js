var http = require('http');

var server = http.createServer(function(req,res){
console.log('Request was made from url : '+req.url);
res.writeHead(200,{'Content-Type':'text/plain'});
res.end('Welcome to the server page');
});

server.listen(8080,'127.0.0.1');
console.log('Listening to the Port: 8080');

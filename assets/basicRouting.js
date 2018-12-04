var http = require('http');

var fs = require('fs');

//Sending HTML contents to client from server
var server=http.createServer(function(req,res){
  console.log('Received request from client');

  if(req.url === '/index' || req.url === '/home'){
      res.writeHead(200,{'Content-Type':'text/html'});
      fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
  }else if(req.url === '/api/f1-drivers' ){
      res.writeHead(200,{'Content-Type':'application/json'});
      var myObj = {
        name:'Lewis',
        age: '38yrs',
        job:'F1 driver'
      };
      res.end(JSON.stringify(myObj));
  }else{
     res.writeHead(404,{'Content-Type':'text/html'});
  }
});
server.listen('8080','127.0.0.1');
console.log("Server listening on Port 8080");

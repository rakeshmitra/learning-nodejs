var http = require('http');

var fs = require('fs');

var myreadStream = fs.createReadStream(__dirname + '/readStory.txt', 'utf8');
var mywriteStream = fs.createWriteStream(__dirname + '/writeStory.txt');
var mywritePipeStream = fs.createWriteStream(__dirname + '/writePipeStory.txt');

myreadStream.on('data',function(chunk){
  console.log('============================================================================================');
  console.log('New Chunk received');
  console.log(chunk);
  mywriteStream.write(chunk);
  console.log('============================================================================================');
});


//Alternate approach to utilize a Pipe
myreadStream.pipe(mywritePipeStream);

//Sending the contents to client from server
var server=http.createServer(function(req,res){
  console.log('Received request from client');
  res.writeHead(200,{'Content-Type':'text/html'});
  var mynewReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  mynewReadStream.pipe(res);

});
server.listen('8080','127.0.0.1');
console.log("Server listening on Port 8080");

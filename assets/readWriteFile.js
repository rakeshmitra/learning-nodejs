var fs = require('fs');

//Non-Blocking or Asynchronous
var contents = fs.readFile('readMe.txt','utf8',function(err,data){
  console.log('data for Non-blocking call which is called first  => '+data);
  fs.writeFile('writeMe0.txt',data,function(err,data){
      console.log('file written ');
  });
});

console.log('Contents of file : '+contents);


//Blocking or synchronous
var data = fs.readFileSync('index.html','utf8');
console.log("=====================");
console.log('Data for blocking call which is called later  => '+data);
console.log("=====================");

console.log("Writing a new file");
fs.writeFileSync('writeMe1.txt',data);

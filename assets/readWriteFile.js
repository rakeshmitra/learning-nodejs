var fs = require('fs');

//Non-Blocking or Asynchronous
var contents = fs.readFile('readMe.txt','utf8',function(err,data){
  console.log('data for Non-blocking call which is called first  => '+data);
  fs.writeFile('writeMe2.txt',data,function(err,data){
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

//to delete files
fs.unlink('writeMe0.txt',function(err,data){
  console.log('File deterd successfully');
});

fs.unlinkSync('writeMe1.txt');

//Creating a Ddirectory
//fs.mkdirSync('stuff2');

//Removing a Directory
fs.rmdirSync('stuff2');
//To remove a Directory we need to remove all files inside first

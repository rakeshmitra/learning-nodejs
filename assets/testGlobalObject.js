//To log a message on console
console.log('Hello World!');

console.log('Current Directory =>' +__dirname);
console.log('File name =>' +__filename);
//Global setTimeout function
setTimeout(function (){
  console.log('3 seconds passed');
},3000);

console.log('======================================================');
//Global setInterval function
var timer=0;
/*setInterval(function (){
timer +=2;
  console.log(timer + 'seconds passed');
}, 2000);
*/

console.log('======================================================');
//Global clearInterval
var counter = setInterval(function (){
  timer +=2;
  console.log(timer + 'seconds passed');
  if (timer > 10){
    clearInterval(counter);
  }
}, 2000);

console.log('======================================================');

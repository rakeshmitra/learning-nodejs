//Normal Javascript Function
function sayHello(){
  console.log('Hello!');
}
sayHello();


//Function Expression
var myFunc = function (){
 console.log('Anonymous Function');
}

myFunc();


//Passing Functions as params to another function
function callFunction (fun){
   fun();
}

var sayBye= function(){
  console.log('Bye!');
}

callFunction(sayBye);

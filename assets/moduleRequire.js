var counter = require('./moduleExport');


//This will not work
//console.log(countArrayItems(['First','Second','Third','Fourth','Fifth']));

//This will work
console.log(counter(['First','Second','Third','Fourth','Fifth','Sixth']));

console.log(" ");
var pattern1 = require('./moduleExportPattern1');
console.log("Pattern1=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log(pattern1.adder(pattern1.pi,3));
console.log(pattern1.adder(2,3));
console.log(pattern1.multiplier(2,3));



console.log(" ");
console.log("Pattern2=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log(" ");
var pattern2 = require('./moduleExportPattern2');
console.log(pattern2.adder(pattern2.pi,5));
console.log(pattern2.adder(4,5));
console.log(pattern2.multiplier(4,5));

console.log(" ");
console.log("Pattern3=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
var pattern3 = require('./moduleExportPattern3');
console.log(pattern3.adder(pattern3.pi,7));
console.log(pattern3.adder(6,7));
console.log(pattern3.multiplier(6,7));

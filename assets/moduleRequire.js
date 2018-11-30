var counter = require('./moduleExport');


//This will not work
//console.log(countArrayItems(['First','Second','Third','Fourth','Fifth']));

//This will work
console.log(counter(['First','Second','Third','Fourth','Fifth']));

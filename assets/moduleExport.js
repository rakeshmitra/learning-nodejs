function callFunction(func){
   func();
}

var countArrayItems = function(arr){
   return 'There are '+arr.length + ' elements in the input Array';
}

console.log(countArrayItems(['First','Second','Third','Fourth','Fifth']));

//callFunction(countArrayItems((['First','Second','Third','Fourth','Fifth'])));
//callFunction(countArrayItems(['First','Second','Third','Fourth','Fifth']));

//console.log(callFunction(countArrayItems(['First','Second','Third'])));
module.exports = countArrayItems;

//This works only with module.exports not with the below exports only
//exports = countArrayItems;

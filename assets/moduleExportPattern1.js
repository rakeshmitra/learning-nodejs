var adder = function (a, b){
    return `The sum of the 2 numbers supplied is ${a+b}`;
}


var multiplier = function (a, b){
    return `The product of the 2 numbers supplied is ${a*b}`;
}

var pi = 3.142;
console.log(`Logger inside pattern1`);
console.log(adder(2,3));
console.log(multiplier(2,3));
console.log(``);

module.exports.pi = pi;
module.exports.adder = adder;
module.exports.multiplier = multiplier;

var adder = function (a, b){
    return `The sum of the 2 numbers supplied is ${a+b}`;
}


var multiplier = function (a, b){
    return `The product of the 2 numbers supplied is ${a*b}`;
}

var pi = 3.142;

module.exports = {
       pi : pi,
       adder :adder,
       multiplier : multiplier
};

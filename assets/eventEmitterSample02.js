var events = require ('events');
var utility = require ('util');

var Person = function(name){
  this.name = name;
};

utility.inherits(Person,events.EventEmitter);

var lewis = new Person('Lewis');
var seb = new Person('Sebastian');
var ricciardo = new Person('Ricciardo');
var people = [lewis,seb,ricciardo];

people.forEach(function(person){
  person.on('speak', function(msg){
    console.log(person.name + 'said: ' +msg);

  });
});

lewis.emit('speak', 'I won fifth championship! Hurray!');
seb.emit('speak', 'I came second');
ricciardo.emit('speak', 'I will win championship next year');

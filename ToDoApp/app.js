var express = require('express');
var todoAppController = require('./controllers/toDoAppController');

var exp = express();

//Set up template engine
exp.set('view engine','ejs');

//Static files
exp.use(express.static('./assets'));


//Fire controllers
todoAppController(exp);

//Listen to Port
exp.listen(8080);

console.log('You are listening on port 8080');

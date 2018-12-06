var express = require('express');
var bodyParser = require('body-parser');

var exp = express();

//Using Tmaplate engine
exp.set('view engine','ejs');

//Serving Static contents
exp.use('/images', express.static('images'));

//To read Query String  use req.query

exp.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

exp.get('/Home',function(req,res){
  //res.sendFile(__dirname + '/index.html');
  res.render('index');
});

exp.get('/Contact',function(req,res){
  //res.sendFile(__dirname + '/contact.html');
  res.render('contact', {qStr : req.query});
});

exp.get('/profile/:name',function(req,res){
  var userData = {age: '35yrs' , job:'Engineer', hobbies :['eating','playing','sleeping']};
  res.render('profile',{userName : req.params.name, userData:userData});
});

//Body-parser package code to read values from POST method in form
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
exp.post('/ContactSuccess', urlencodedParser, function (req, res) {
  console.log(req.body);
  if (!req.body) return res.sendStatus(400)
  //res.send('welcome, ' + req.body.who);
  res.render('contact-success', {data : req.body});
})

exp.listen(8080);

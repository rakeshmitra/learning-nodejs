var express = require('express');

var exp = express();

exp.set('view engine','ejs');


exp.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

exp.get('/Home',function(req,res){
  //res.sendFile(__dirname + '/index.html');
  res.render('index');
});

exp.get('/Contact',function(req,res){
  //res.sendFile(__dirname + '/contact.html');
  res.render('contact');
});

exp.get('/profile/:name',function(req,res){
  var userData = {age: '35yrs' , job:'Engineer', hobbies :['eating','playing','sleeping']};
  res.render('profile',{userName : req.params.name, userData:userData});
});

exp.listen(8080);

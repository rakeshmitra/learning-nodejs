var express = require('express');

var exp = express();




exp.get('/',function(req,res){
  res.send('This is my new home page!')
});

exp.get('/profile/:id',function(req,res){
  res.send('You searched for profile with Id:'+req.params.id);
});


exp.listen(8080);

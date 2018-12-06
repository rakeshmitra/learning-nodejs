var bodyparser = require('body-parser');
//var data = [{item:'Pick newspaper'},{item:'Recharge DTH'},{item:'Pay rent'},{item:'Buy Milk'}];
var urlencodedParser = bodyparser.urlencoded({extended: false});
var mongoose = require('mongoose');

//Connect to Database
mongoose.connect('mongodb://test:test1234@ds127644.mlab.com:27644/todo');

//Create schema - this is blueprint
var todoSchema = new mongoose.Schema({
  item: String
});

//Create a model
var Todo = mongoose.model('Todo',todoSchema);


module.exports = function(exp){

exp.get('/todo',function(req,res){
  console.log("GET method called");

  //Get data from mlab/mongoose db and pass it to view
  Todo.find({},function(err,data){
    if(err) throw err;
    res.render('todo',{todos : data});
  })

});

exp.post('/todo', urlencodedParser, function(req,res){
  console.log("POST method called");
  console.log(req.body);
  if (!req.body) return res.sendStatus(400);
  var newTodo = Todo(req.body).save(function(err,data){
    //data.push(req.body);
    if(err) throw err;
    res.json(data);

  })

});

exp.delete('/todo/:item',function(req,res){
  console.log("DELETE method called");
  console.log('Item being deleted : ->'+req.params.item);
  Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
      if(err) throw err;
      res.json(data);

  })
});


};

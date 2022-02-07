const Todo = require('../Models/todoModel');

exports.getAllTodos = function(req,res){
    Todo.find({}).then(function(data){
        res.send(data);
    }).catch(function(err){
        console.log(err);
    })
}


exports.getTodoById = function(req,res){
    const {id} = req.params
    Todo.findById(id).then(function(data){
        res.send(data);
        console.log(data)
    }).catch(function(err){
        console.log(err);
    })
}

exports.postTodo = function(req,res){
    let {todo} = req.body
    Todo.create({todo}).then(function(result){
        res.send(result);
    }).catch(function(err){
        console.log(err);
    })   
}


exports.patchById = function(req,res){
    const {id} = req.params
    let {todo} = req.body
    Todo.findByIdAndUpdate(id, {
        todo
    }).then(function(response){
        res.send(response);
    }).catch(function(err){
        console.log(err);
    })
}

exports.deleteById = function(req,res){
    console.log(req.params.id)
    const {id} = req.params
     Todo.findByIdAndRemove(id).then(function(data){
        res.send(data)
        console.log(data)
    }).catch(function(err){
        console.log(err)
    })
}

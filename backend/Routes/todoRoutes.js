const express = require('express');
const todoController = require('../Controllers/todoController');

const Router = express.Router();

Router
    .route('/')                                 //Bcoz the api hits on the main address
    .get(todoController.getAllTodos)
    .post(todoController.postTodo);

Router
    .route('/:id')
    .get(todoController.getTodoById)
    .patch(todoController.patchById)
    .delete(todoController.deleteById);


module.exports = Router;
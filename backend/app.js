const express = require('express');
const cors = require('cors');
const todoRouter = require('./Routes/todoRoutes');



const app = express();
app.use(express.json({extended: false}))
app.use(cors());


// app.get('/api/v1', getAllTodos);
// app.get('/api/v1/:id', getTodoById);
// app.post('/api/v1', postTodo);
// app.patch('/api/v1/:id', patchById);
// app.delete('/api/v1/:id', deleteById );


app.use('/api/v1', todoRouter)                   //Connecting to our route to application as middleware


module.exports = app;
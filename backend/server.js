const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({path: './config.env'});
// console.log(process.env);


mongoose.connect(process.env.DATABASE).then(function(){
    console.log('Atlas db connected');
}).catch(function(err){
    console.log(err)
})

const PORT = process.env.Port || 5000;
app.listen(PORT, function(){
    console.log(`Server started on port: ${PORT}`);
});
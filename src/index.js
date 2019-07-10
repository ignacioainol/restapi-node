const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);
app-set('json spaces',2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//routes
app.get('/',(req,res) => {
    res.json({"message":"hello world"});
});

//starting the server
app.listen(3000,() =>{
    console.log('running on port ',app.get('port'));
});
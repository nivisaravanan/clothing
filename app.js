require('./models/db');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const bodyparser = require('body-parser');
const {
    allowInsecurePrototypeAccess,
  } = require('@handlebars/allow-prototype-access');
 const employeeController = require('./controllers/product.controller');
var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.get('/',(req,res)=>{
    res.render('index');
    });
    app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine(
    'hbs',
    exphbs.engine({
      extname: 'hbs',
      defaultLayout: 'layout',
      layoutsDir: __dirname + '/views/layouts/', 
  
      handlebars: allowInsecurePrototypeAccess(Handlebars),
         })   
  );
  app.set('view engine', 'hbs');
  app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});
app.use('/employee', employeeController);

'use strict';

var PORT = process.env.PORT || 3000;

//requires
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();
app.set('view engine','jade');

//middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());
app.use(express.static('public'));

//routes
app.use('/', require('./routes/index'));
app.use('/add', require('./routes/add'));
app.use('/del',require('./routes/del'));
app.use('/edit',require('./routes/edit'));

//404 Handler
app.use(function(req,res){
  res.status(404).render('404')
});

app.listen(PORT,function(){
  console.log('Listening on port', PORT );
});
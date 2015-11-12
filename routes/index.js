'use strict'

var express = require('express');
var router = express.Router();
var Name = require('../models/add');

router.get('/',function(req,res){
  Name.check(function(err,names){
  res.render('index',{items:names});
  });
});



module.exports = router;
'use strict';

var express = require('express');
var router = express.Router();

var Add = require('../models/add')

router.get('/',function(req,res){
  Add.check(function(err,fullList){
    if(err){
      return res.status(400).send(err);
    }
    res.send(fullList);
  });
});

router.post('/',function(req,res){
  var toAdd = req.body;
  Add.compile(toAdd , function(err){
    if(err){
      res.status(400).send(err);
    } else {
      res.send();
    }
  });
});
// );


module.exports = router;
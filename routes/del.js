'use strict';

var express = require('express');
var router = express.Router();

var Del = require('../models/del')

router.post('/',function(req,res){
  var delB = req.body;
  Del.delete(delB , function(err) {
    if(err){
      res.status(400).send(err);
    } else {
      res.send();
    }
  });
});


module.exports = router;
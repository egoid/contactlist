'use strict';

var express = require('express');
var router = express.Router();

var Edit = require('../models/edit')

router.post('/',function(req,res){
  var editReq = req.body;
  Edit.toEdit( editReq , function(err) {
    if(err){
      res.status(400).send(err);
    } else {
      res.send();
    }
  });
});


module.exports = router;
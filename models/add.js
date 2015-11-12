'use strict';

var fs = require('fs');

var Add = {};


Add.check = function(cb){
  fs.readFile('db/dir.json',function(err,data){
    if (err){
      cb(err);
    } else {
      var fullList = JSON.parse(data);
      console.log(fullList);
      cb(null,fullList);
    }
  });
};

Add.compile = function(toAdd , cb){
  Add.check(function(err,fullList){
    if(err) return cb(err);
    fullList.push( toAdd ) ;
    var exportList = JSON.stringify(fullList);
      fs.writeFile('db/dir.json', exportList , function(err){
        if(err) return cb(err);
        cb(null);
      });
  });
};

module.exports = Add ;
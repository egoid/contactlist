'use strict';

var fs = require('fs');
var Del = {};

Del.delete = function(findDel , cb){
  fs.readFile('db/dir.json',function(err,data){
    if (err){
      cb(err);
    } else {
      var fullList = JSON.parse(data);
      var delString = JSON.stringify(findDel);
      var stringL = JSON.stringify(fullList);
      var x =stringL.indexOf(delString);
      var begin = stringL.slice(0,x)
      var end = stringL.slice(x+delString.length+1)
      var rtn=(begin+end)
      rtn = JSON.parse(rtn)
      rtn = JSON.stringify(rtn)
      console.log(rtn)
    fs.writeFile('db/dir.json',rtn,function(err){
      if(err) return cb(err);
      cb(null);
    })  
    }
});
}

module.exports = Del ;
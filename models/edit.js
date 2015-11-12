'use strict';

var fs = require('fs');
var Edit = {};

Edit.toEdit = function(editArray, cb){
  fs.readFile('db/dir.json',function(err,data){
    if (err){
      cb(err);
    } else {
      var inputStr = JSON.stringify(editArray)
      var n = inputStr.indexOf('nameEdit');

      var newStr = inputStr.slice(0,n-2);
      newStr = newStr+('}');

      var oldStr = inputStr.slice(n-1);
      oldStr = ('{')+oldStr

      oldStr = oldStr.replace('nameEdit','name') ; oldStr = oldStr.replace('emailEdit','email') ; oldStr = oldStr.replace('phoneEdit','phone')

      var fullList = JSON.parse(data);
      fullList = JSON.stringify(fullList);

      fullList = fullList.replace(oldStr,newStr)
      fullList = JSON.parse(fullList);
      var stringList = JSON.stringify(fullList);
      console.log(stringList);
      // var oldEdit = {"names":editArray[0],"email":editArray[1],"phone":editArray[2]};
   
      
   

        // console.log(oldEdit) ; 
        // console.log(newEdit)

      // var index = newEdit.indexOf(oldEdit);
      // var begin = newEdit.slice(0,index);
      // var end = newEdit.slice(index+oldEdit.length-2);
      // var rtn = (begin+end);
      // console.log(begin+"____________"+end)
      fs.writeFile('db/dir.json',stringList,function(err){
      if(err) return cb(err);
      cb(null);
    });
    }  
  })
};


module.exports = Edit ;

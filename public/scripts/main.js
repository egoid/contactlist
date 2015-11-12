'use strict';

$(document).ready(init);

function init() {

  var nameEdit;
  var emailEdit;
  var phoneEdit;

  $('#adder').click(runAdd)
  $('a#del').click(del)
  $('a#openEdit').click(globalVar)
}



function globalVar(){
  var $toEdit = $(this).parents().eq(2);
  var $whereEdit = $toEdit.children().children().children().children();
  var nameEdit = $whereEdit[0].innerText ; var emailEdit = $whereEdit[1].innerText ; var phoneEdit = $whereEdit[2].innerText;
  console.log(nameEdit)
  $('a#editor').click(function(){
      var name = $('input#editName').val() || nameEdit
      var email = $('input#editEmail').val() || emailEdit
      var phone = $('input#editPhone').val() || phoneEdit  
      var postEdit = { name, email, phone, nameEdit, emailEdit, phoneEdit }
      console.log($toEdit);
      $.post('/edit', postEdit)

      var topAppend = $('ul.material-list-step.hierarchical-timing')
      var $clone = $toEdit.clone();
      $('li:last').text(phone);
      $('li:last').prev().text(email);
      $('li:last').prev().prev().text(name);
      $clone.appendTo(topAppend)
      $clone.remove();
    })

}


function runAdd(){
  var toAdd={};

  toAdd.name = $('input#name').val();
  toAdd.email = $('input#email').val();
  toAdd.phone = $('input#phone').val();

  $.post('/add', toAdd)
  var topAppend = $('ul.material-list-step.hierarchical-timing')
  var $clone = $('#incoming').clone();
  $('li:last').text(toAdd.phone);
  $('li:last').prev().text(toAdd.email);
  $('li:last').prev().prev().text(toAdd.name);
  $clone.appendTo(topAppend).removeAttr('id');
}

function del(){
  var $toDel = $(this).parents().eq(2);
  var $whereDel =  $toDel.children().children().children().children();
  var nameDel = $whereDel[0].innerText ; var emailDel = $whereDel[1].innerText ; var phoneDel = $whereDel[2].innerText;
  $toDel.remove();
  var passToDel = {"name":nameDel,"email":emailDel,"phone":phoneDel}
  console.log(passToDel)
  $.post('/del',passToDel)
}

// function edit(){
//   var name = $('input#editName').val() || nameEdit
//   var email = $('input#editEmail').val() || emailEdit
//   var phone = $('input#editPhone').val() || phoneEdit  
//   var edits = [nameEdit,emailEdit,phoneEdit,name,email,phone]
//   console.log(edits)
//   $.post('/edit',edits)
// }


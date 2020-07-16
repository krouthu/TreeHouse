var firebase;
$(function(){
  var $name = $('#name'),
      $age = $('#age'),
      $address = $('#address'),
      $price = $('#price');
  var config = {
    databaseURL: "https://landlordprofile.firebaseio.com/"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  
  $btn.on('click',function(){
    var postData = {
      name:$('#name').val(),
      age:$('#age').val(),
      addess:$('#addess').val(),
      price:$('#price').val()
    };
    database.ref().push(postData);
  });
  
});
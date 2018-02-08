
document.getElementById('text').focus();

setTimeout(function() {
var result = $("#text").val();
//var t = "Морки";
//$('[data-position *= "'+t+'"]').click();
var arr = result.split(',');
var nameer = arr[1];
  if (nameer.indexOf('Ульяновская')>=0){
$( "li[data-tab='tab-10']" ).click();
  var result = $("#text").val();


//var arr = result.split(',');
var t = arr[2].trim();
$('[data-keyword *= "'+t+'"]').click();
}
  if (nameer.indexOf('Пензенская')>=0){
$( "li[data-tab='tab-6']" ).click();
  var result = $("#text").val();


//var arr = result.split(',');
var t = arr[2].trim();
$('[data-keyword *= "'+t+'"]').click();
}

if (nameer.indexOf('Чувашская')>=0){
$( "li[data-tab='tab-7']" ).click();
  document.getElementById("phone465").click();
  var result = $("#text").val();


//var arr = result.split(',');
var t = arr[2].trim();
$('[data-keyword *= "'+t+'"]').click();
}
  
  f (nameer.indexOf('Марий')>=0){
$( "li[data-tab='tab-31']" ).click();
    ocument.getElementById("phone1985").click();
  var result = $("#text").val();


//var arr = result.split(',');
var t = arr[2].trim();
$('[data-keyword *= "'+t+'"]').click();
}

}, 3000);

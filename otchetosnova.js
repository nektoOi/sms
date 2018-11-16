
var i = confirm("Отчет о недоступности за день ?");
if (i==true){


$( "div.text-holder:contains('Менеджер отчетов')" ).dblclick();
setTimeout(function() { 

$( "div[class='ui-tree-node-hider']" ).click();

}, 500);
setTimeout(function() {


$( "div.ui-tree-node-content:contains('Стандартные')" ).click();

}, 820);

setTimeout(function() {

$( "div.ui-tree-node-content:contains('Стандартные')" ).click();

}, 830);
setTimeout(function() {


$( "div.ui-tree-node-content:contains('За сутки')" ).click();

}, 1020);

setTimeout(function() {

$( "div.ui-tree-node-content:contains('За сутки')" ).click();

}, 1030);
setTimeout(function() {


$( "div.ui-tree-node-content:contains('Аварии')" ).click();

}, 1220);

setTimeout(function() {

$( "div.ui-tree-node-content:contains('Аварии')" ).click();

}, 1230);

setTimeout(function() {


$( "div.ui-tree-node-content:contains('Аварии о недоступности за день')" ).click();

}, 1420);

setTimeout(function() {

$( "div.ui-tree-node-content:contains('Аварии о недоступности за день')" ).click();

}, 1430);

setTimeout(function() {



$( "div[title='XLSX']" ).click();
}, 1630);

setTimeout(function() {


$( "input[value='Подтвердить']" ).click();
}, 2830);


setTimeout(function() {
if((document.location.href).indexOf('10.78.53.173')>=0){

 $( "a[target='_blank']" ).attr('download', 'chv.xlsx');
}

if((document.location.href).indexOf('10.78.53.172')>=0){

 $( "a[target='_blank']" ).attr('download', 'uln.xlsx');
}

if((document.location.href).indexOf('10.78.53.166')>=0){

 $( "a[target='_blank']" ).attr('download', 'orb.xlsx');
}

if((document.location.href).indexOf('10.78.53.171')>=0){

 $( "a[target='_blank']" ).attr('download', 'udm.xlsx');
}

if((document.location.href).indexOf('10.78.53.171')>=0){

 $( "a[target='_blank']" ).attr('download', 'udm.xlsx');


}

if((document.location.href).indexOf('10.78.53.163')>=0){

 $( "a[target='_blank']" ).attr('download', 'mel.xlsx');
}

if((document.location.href).indexOf('10.78.53.164')>=0){

 $( "a[target='_blank']" ).attr('download', 'mrd.xlsx');
}


if((document.location.href).indexOf('10.78.53.169')>=0){

 $( "a[target='_blank']" ).attr('download', 'srt.xlsx');
}

if((document.location.href).indexOf('10.78.53.169')>=0){

 $( "a[target='_blank']" ).attr('download', 'srt.xlsx');
}

if((document.location.href).indexOf('10.78.53.165')>=0){

 $( "a[target='_blank']" ).attr('download', 'nzg.xlsx');
}


if((document.location.href).indexOf('10.78.53.162')>=0){

 $( "a[target='_blank']" ).attr('download', 'kir.xlsx');
}

if((document.location.href).indexOf('10.78.53.167')>=0){

 $( "a[target='_blank']" ).attr('download', 'pnz.xlsx');
}



}, 4000);
}


if (i==false){

$( "div.text-holder:contains('Менеджер отчетов')" ).dblclick();
setTimeout(function() { 

$( "div[class='ui-tree-node-hider']" ).click();

}, 500);
setTimeout(function() {


$( "div.ui-tree-node-content:contains('Пользовательские')" ).click();

}, 820);

setTimeout(function() {

$( "div.ui-tree-node-content:contains('Пользовательские')" ).click();

}, 830);

    setTimeout(function() {


$( "div.ui-tree-node-content:contains('Топ \"N\" аварийных устройств')" ).click();

}, 1420);

setTimeout(function() {

$( "div.ui-tree-node-content:contains('Топ \"N\" аварийных устройств')" ).click();

}, 1430);

setTimeout(function() {



$( "div[title='XLSX']" ).click();
}, 2630);


setTimeout(function() {


$( ".switchboxv2__input" ).eq(4).click();
}, 2830);


setTimeout(function() {



var yesterday = new Date();

yesterday.setDate(yesterday.getDate() - 1);

var curr_date = yesterday.getDate();

var curr_month = yesterday.getMonth() + 1;

var curr_year = yesterday.getFullYear();

var str_date = curr_year + "-" + ("0" + curr_month).slice(-2) + "-" + ("0" + curr_date).slice(-2);

$( ".ui-textbox" ).eq(2).text(str_date+ " 00:00:00" );


var date = new Date();
var curr_date1 = date.getDate();

var curr_month1 = date.getMonth() + 1;

var curr_year1 = date.getFullYear();

var str_date1 = curr_year1 + "-" + ("0" + curr_month1).slice(-2) + "-" + ("0" + curr_date1).slice(-2);

$( ".ui-textbox" ).eq(3).text(str_date1+ " 00:00:00" );



}, 2930);
setTimeout(function() {


var i = 0;

while (i < 100) {

  $( ".box__incBtn" ).eq(1).click();

  i++;
}

 $( ".ui-textbox" ).eq(2).focus();
 
 var e = jQuery.Event("keypress");
e.which = 50; // # Some key code value
e.keyCode = 50;
$( ".ui-textbox" ).eq(2).trigger(e);
 

}, 3130);


setTimeout(function() {


$( ".nonselectable" ).eq(1).click();
}, 3630);



setTimeout(function() {
if((document.location.href).indexOf('10.78.53.173')>=0){

 $( "a[target='_blank']" ).attr('download', 'chv.xlsx');
}

if((document.location.href).indexOf('10.78.53.172')>=0){

 $( "a[target='_blank']" ).attr('download', 'uln.xlsx');
}

if((document.location.href).indexOf('10.78.53.166')>=0){

 $( "a[target='_blank']" ).attr('download', 'orb.xlsx');
}

if((document.location.href).indexOf('10.78.53.171')>=0){

 $( "a[target='_blank']" ).attr('download', 'udm.xlsx');
}

if((document.location.href).indexOf('10.78.53.171')>=0){

 $( "a[target='_blank']" ).attr('download', 'udm.xlsx');


}

if((document.location.href).indexOf('10.78.53.163')>=0){

 $( "a[target='_blank']" ).attr('download', 'mel.xlsx');
}

if((document.location.href).indexOf('10.78.53.164')>=0){

 $( "a[target='_blank']" ).attr('download', 'mrd.xlsx');
}


if((document.location.href).indexOf('10.78.53.169')>=0){

 $( "a[target='_blank']" ).attr('download', 'srt.xlsx');
}

if((document.location.href).indexOf('10.78.53.169')>=0){

 $( "a[target='_blank']" ).attr('download', 'srt.xlsx');
}

if((document.location.href).indexOf('10.78.53.165')>=0){

 $( "a[target='_blank']" ).attr('download', 'nzg.xlsx');
}


if((document.location.href).indexOf('10.78.53.162')>=0){

 $( "a[target='_blank']" ).attr('download', 'kir.xlsx');
}

if((document.location.href).indexOf('10.78.53.167')>=0){

 $( "a[target='_blank']" ).attr('download', 'pnz.xlsx');
}





}, 20000);
setTimeout(function() {
$( "a[target='_blank']" )[0].click();

}, 21000);
}




var result = $("#text").val();

var arr = result.split(',');
var nameer = arr[1];
if (nameer.indexOf('Чувашская')>=0){
$( "li[data-tab='tab-7']" ).click();
}
if (nameer.indexOf('Марий')>=0){
$( "li[data-tab='tab-31']" ).click();
}

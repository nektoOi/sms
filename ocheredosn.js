var num = $(".heading-accent").text().trim();
var titl = $(".text-ellipsis").text().trim();
var adr = $("#group_interaction_info_form-tab_view-node_rule_building_out-address_ac_out").text().trim();
var url = window.location.href;



var mess = num + '  '+ "Исполнитель  "+ titl +' ' + adr + " "+ url;
//$("#group_interaction_info_form-tab_view-node_rule_building_out-node_rule_building_out").html('<input type="button" name="nubex" value="Nubex" />');


//$("columns").html('<button class="copy" id="copyw">Перейти в СМС</button><<input class="text" id="gert" value="аааа"  />');
$( "div[class='ui-grid-col-12']" ).html('<button class="copy" id="copyw">Перейти в СМС</button><<input class="text" id="gert" value="аааа"  />');
document.getElementById('gert').value = mess;


var button = document.querySelector('.copy');
button.addEventListener('click', function(event) {
  var text = document.querySelector('.text');
  text.select();
  document.execCommand('copy');

window.open("mailto:i.timofeicheva@volga.rt.ru?subject=Неверно назначена ПРМОН");
});
document.getElementById('copyw').click();

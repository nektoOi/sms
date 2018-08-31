var namb = prompt('Номер РНР' );
var place = prompt('Место проведения работ' );
var time = prompt('Время пропазания услуг - Пример "7 часов" или "30 мин"' );
var abon = prompt('Колличество стадающих абонентов' );




var r = "РНР № " + namb + " на  оборудование связи, кабель, оборудование электропитания, информационные технологии" +"\n"+ "\nМЕСТО ПРОВЕДЕНИЯ: " + place  +" ВЛИЯНИЕ НА УСЛУГИ:  доступ в Интернет, интерактивное ТВ, Wi-Fi, VPN, телефонная связь, степень влияния на них: недоступность, ухудшение качества, кратковременное пропадание до " + time +  "  для " + abon + " клиентов.";


document.getElementById("group_interaction_info_form-tab_view-commentary").value = r;
document.getElementById("group_interaction_info_form-tab_view-businessInteraction").value = "РНР № " + namb;

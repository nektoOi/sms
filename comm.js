var i = confirm("Отрубили Э/Э ??? .Если да то ОК Нет - отмена");
if (i==true){

var y=prompt('Кто подтвердил? .Если неизвестно то Отмена',  );

if (y==null){

document.getElementById("j_idt1604-history_form-new_comment").value ='РЭС подтвердил отключение электроэнергии';

}
else
document.getElementById("j_idt1604-history_form-new_comment").value ='Отключение электроэнергии подтвердил '+y ;
}

else document.getElementById("j_idt1604-history_form-new_comment").value ='РЭС не подтвердил отключение Э/Э' ;

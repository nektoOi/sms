var y=prompt('Сколько ф-лов на одной станице мониторим?',  );
var w=prompt('Порог срабатывания сигнала',  );
for(i=0;i<y;i++){
var ter = $('.ui-window').eq(i).find("span").eq(0).text();

var alarm = ter.replace(/\D+/g,"");

if(alarm>w){

window.open("https://www.youtube.com/watch?v=mDFBTdToRmw");

}
}

mainUrl='https://raw.githubusercontent.com/nektoOi/sms/master/';

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); 
	xmlHttp.send( null );
   return xmlHttp.responseText;
}


if((document.location.href).indexOf('10.78.53')>=0){
	actoinScript=mainUrl+'otchetosnova.js';
	eval(httpGet(actoinScript));
}

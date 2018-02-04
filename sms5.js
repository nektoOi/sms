
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
if (nameer.indexOf('Марий')>=0){
$( "li[data-tab='tab-31']" ).click();
  document.getElementById("phone1985").click();
  if (arr[2].indexOf('Советский')>=1){
  document.getElementById("phone1953").click();
    document.getElementById("phone1954").click();
    document.getElementById("phone1987").click();
  }
  if (arr[2].indexOf('Йошкар')>=1){
  document.getElementById("phone1909").click();
    document.getElementById("phone1910").click();
    document.getElementById("phone1911").click();
  }
   if (arr[2].indexOf('Медвед')>=1){
  document.getElementById("phone1977").click();
    document.getElementById("phone1978").click();
    document.getElementById("phone1979").click();
     document.getElementById("phone1980").click();
  }
   if (arr[2].indexOf('Оршан')>=1){
  document.getElementById("phone1930").click();
    document.getElementById("phone1931").click();
    document.getElementById("phone1932").click();
    
  }
     if (arr[2].indexOf('Килема')>=1){
  document.getElementById("phone1933").click();
    document.getElementById("phone1934").click();
     }
       if (arr[2].indexOf('Сернур')>=1){
  document.getElementById("phone1960").click();
    document.getElementById("phone1959").click();
          document.getElementById("phone1958").click();
          document.getElementById("phone1957").click();
}
  if (arr[2].indexOf('Мари')>=1){
  document.getElementById("phone1950").click();
    document.getElementById("phone1951").click();
          document.getElementById("phone1952").click();
          document.getElementById("phone1955").click();
    document.getElementById("phone1956").click();
}
  if (arr[2].indexOf('Юрин')>=1){
  document.getElementById("phone1944").click();
    document.getElementById("phone1945").click();
          document.getElementById("phone1946").click();
         
}
  if (arr[2].indexOf('Волж')>=1){
  document.getElementById("phone1921").click();
    document.getElementById("phone1922").click();
         
}
   if (arr[2].indexOf('Звениг')>=1){
  document.getElementById("phone1965").click();
    document.getElementById("phone1966").click();
     document.getElementById("phone1967").click();
         
}
   if (arr[2].indexOf('Новотор')>=1){
  document.getElementById("phone1935").click();
    document.getElementById("phone1936").click();
     document.getElementById("phone1937").click();
         
}
  if (arr[2].indexOf('Паран')>=1){
  document.getElementById("phone1938").click();
    document.getElementById("phone1939").click();
     document.getElementById("phone1940").click();
         
}
   if (arr[2].indexOf('Кужен')>=1){
  document.getElementById("phone1941").click();
    document.getElementById("phone1942").click();
     document.getElementById("phone1943").click();
         
}
   if (arr[2].indexOf('Морк')>=1){
  document.getElementById("phone1947").click();
    document.getElementById("phone1948").click();
     document.getElementById("phone1949").click();
         
}
  
}
}, 3000);

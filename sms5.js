var result = $("#text").val();

var arr = result.split(',');
var nameer = arr[1];
if (nameer.indexOf('Чувашская')>=0){
$( "li[data-tab='tab-7']" ).click();
}
if (nameer.indexOf('Марий')>=0){
$( "li[data-tab='tab-31']" ).click();
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
}


var outputHTML = ""
function onSearch() {
 
    var  city
    
    city = document.getElementById("input").value
    

    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3b1b02fe26641f44bfd6de6496a5314a&units=metric`

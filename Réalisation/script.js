
var outputHTML = ""
function onSearch() {
 
    var  city
    
    city = document.getElementById("input").value
    

    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3b1b02fe26641f44bfd6de6496a5314a&units=metric`

    fetch (url)
    .then(function(reponse) {

return reponse.json()

})

.then(function(data){

console.log(data),
   
  
    
document.getElementById('name').textContent = data.name,
document.getElementById('wind').textContent = data.wind.speed,
document.getElementById('weather').textContent = data.weather[0].description,
document.getElementById('IDcity').textContent = "id:" +data.id
document.getElementById('iconM').src = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
document.getElementById('Temp').innerHTML = data.main.temp +" °C" 
  

})
}
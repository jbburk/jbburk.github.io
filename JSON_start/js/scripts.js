//ADD the key and change units to imperial
const cityid = "5604473";
const APPID = "489ff7b5249aae895e1644595f955153";

const apiURL = `//api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=${APPID}&units=imperial`;

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherinfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherinfo);
    document.getElementById('place').innerHTML = weatherinfo.name;
    document.getElementById('currentTemp').innerHTML = weatherinfo.main.temp;
    document.getElementById('windSpeed').innerHTML = weatherinfo.wind.speed;

    const iconcode = weatherinfo.weather[0].icon;
    const icon_path = `//openweathermap.org/img/w/${iconcode}.png`;
    document.getElementById('weather_icon').src = icon_path;
 }); //end of "then" fat arrow function




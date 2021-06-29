// If statement chooses the cityid
var cityid = ""

if (document.getElementById("city").textContent == "Preston"){
   cityid = "5604473";
} else if (document.getElementById("city").textContent == "Soda Springs"){
   cityid = "5607916";
} else if (document.getElementById("city").textContent == "Fish Haven"){
   cityid = "5585000";
};

//ADD the key and change units to imperial
// const cityid = document.getElementById('city').textContent

const APPID = "489ff7b5249aae895e1644595f955153";
const weatherURL = `//api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=${APPID}&units=imperial`;
const forecastURL = `//api.openweathermap.org/data/2.5/forecast?id=${cityid}&appid=${APPID}&units=imperial`;

//Fetch request for Weather Information
fetch(forecastURL)
  .then((response) => response.json())
  .then((forecastinfo) => {
    console.log(forecastinfo);
    let day = 0;
    const dayofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // reduce the list array to the five forecasts
    const fiveDayForecast = forecastinfo.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));
    console.log(fiveDayForecast)

    fiveDayForecast.forEach( x => {
        let d = new Date(x.dt_txt);
        console.log(d);
        const desc = x.weather[0].description;
        const iconcode = x.weather[0].icon;
        const icon_path = `//openweathermap.org/img/wn/${iconcode}.png`;
        document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
        document.getElementById(`icon${day+1}`).src = icon_path;
        document.getElementById(`icon${day+1}`).setAttribute('alt', desc)
        document.getElementById(`forecast${day+1}`).textContent = Math.round(x.main.temp);
        day++
    });
});

//Fetch request for Weather Information
fetch(weatherURL)
  .then((response) => response.json())
  .then((weatherinfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherinfo);
    document.getElementById('currentstate').innerHTML = weatherinfo.weather[0].main;
    document.getElementById('currentTemp').innerHTML = Math.round(weatherinfo.main.temp);
    document.getElementById('humidity').innerHTML = weatherinfo.main.humidity;
    document.getElementById('windSpeed').innerHTML = Math.round(weatherinfo.wind.speed);
 });

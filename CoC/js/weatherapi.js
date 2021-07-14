// If statement chooses the cityid
//ADD the key and change units to imperial
var lat = "42.5917";
var lon = "-88.4334";
var part = "minutely,hourly";
// const cityid = document.getElementById('city').textContent

const APPID = "489ff7b5249aae895e1644595f955153";
const onecallURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${APPID}&units=imperial`;

//Fetch request for Three Day Weather Forcast
fetch(onecallURL)
  .then((response) => response.json())
  .then((weatherinfo) => {
    // console.log(weatherinfo);
    let day = 0;
    const dayofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const threeDayForecast = weatherinfo.daily;
    console.log(threeDayForecast)

    threeDayForecast.forEach( x => {
        let d = new Date(x.dt);
        console.log(d);
        const desc = x.weather[0].description;
        const iconcode = x.weather[0].icon;
        const icon_path = `//openweathermap.org/img/wn/${iconcode}.png`;
        document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
        document.getElementById(`icon${day+1}`).src = icon_path;
        document.getElementById(`icon${day+1}`).setAttribute('alt', desc)
        document.getElementById(`forecast${day+1}`).textContent = Math.round(x.temp.day);
        day++;
    });
  });

// //Fetch request for Current Weather
// fetch(onecallURL)
//   .then((response) => response.json())
//   .then((weatherinfo) => {
//     console.log(weatherinfo);
//     let day = 0;
//     const dayofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     // reduce the list array to the five forecasts
//     const fiveDayForecast = weatherinfo.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));
//    //  console.log(fiveDayForecast)

//     fiveDayForecast.forEach( x => {
//         let d = new Date(x.dt_txt);
//       //   console.log(d);
//         const desc = x.weather[0].description;
//         const iconcode = x.weather[0].icon;
//         const icon_path = `//openweathermap.org/img/wn/${iconcode}.png`;
//         document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
//         document.getElementById(`icon${day+1}`).src = icon_path;
//         document.getElementById(`icon${day+1}`).setAttribute('alt', desc)
//         document.getElementById(`forecast${day+1}`).textContent = Math.round(x.main.temp);
//         day++
//     });
// });

// //Fetch request for Weather Alerts
// fetch(onecallURL)
//   .then((response) => response.json())
//   .then((weatherinfo) => {
//    //  console.log(weatherinfo);
//     document.getElementById('currentstate').innerHTML = weatherinfo.weather[0].main;
//     document.getElementById('currentTemp').innerHTML = Math.round(weatherinfo.main.temp);
//     document.getElementById('humidity').innerHTML = weatherinfo.main.humidity;
//     document.getElementById('windSpeed').innerHTML = Math.round(weatherinfo.wind.speed);
//  });

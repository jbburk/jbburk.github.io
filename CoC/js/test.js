// If statement chooses the cityid
//ADD the key and change units to imperial
var lat = "42.5917";
var lon = "-88.4334";
var part = "minutely,hourly";
// const cityid = document.getElementById('city').textContent

const APPID = "489ff7b5249aae895e1644595f955153";
const onecallURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${APPID}&units=imperial`;

//Fetch request
fetch(onecallURL)
  .then((response) => response.json())
  .then((data) => {    
    console.log(data);
    // 3-DAY WEATHER FORCAST    
    for (let i = 0; i < 3; i++){
        // Constants for each item
        const dayofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const forecast = data.daily;
        // console.log(forecast);
        let d = new Date(forecast[i].dt * 1000);
        let desc = forecast[i].weather[0].description;
        let iconcode = forecast[i].weather[0].icon;
        let icon_path = `//openweathermap.org/img/wn/${iconcode}.png`;
        let daytemp = forecast[i].temp.day;

        // Define each item
        let box = document.createElement('section');
        let card = document.createElement('div');
        let name = document.createElement('h2');
        let icon = document.createElement('img');
        let temp = document.createElement('p');

        // Match constants to items
        name.textContent = dayofWeek[d.getDay()];
        icon.setAttribute('src', icon_path);
        icon.setAttribute('alt', desc);
        temp.textContent = Math.round(daytemp);

        // Compile boxes together
        card.appendChild(name);
        card.appendChild(icon);
        card.appendChild(temp);
        box.appendChild(card);
        document.getElementById('weatherWrapper').appendChild(box);
    };

    // CURRENT WEATHER CONDITIONS
    const current = data.current;
    

    // WEATHER ALERTS!!!

    const alert = data.alerts;

  });

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
    // console.log(data);
    // 3-DAY WEATHER FORCAST    
    if (typeof data.daily !== 'undefined') {
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
        let humidity = document.createElement('p');
        let description = document.createElement('p');

        // Match constants to items
        name.textContent = dayofWeek[d.getDay()];
        icon.setAttribute('src', icon_path);
        icon.setAttribute('alt', desc);
        temp.textContent = Math.round(daytemp);

        // Compile boxes together
        card.appendChild(name);
        card.appendChild(icon);
        card.appendChild(temp);
        
        document.getElementById('weatherWrapper').appendChild(card);
      }
    } else {
      console.log("Error: Data for Weather Forecast is undefined")
    }
    // CURRENT WEATHER CONDITIONS
    if (typeof data.current !== 'undefined'){
      let card = document.createElement('div');
      let name = document.createElement('h2');
      let temp = document.createElement('p');
      let humidity = document.createElement('p');
      let description = document.createElement('p');

      const currentweather = data.current;
      // Need current temp, condition description, and humidity
      let currenttemp = currentweather.temp;
      let currentcondition = currentweather.weather[0].description;
      let currenthumidity = currentweather.humidity;

      name.textContent = "Current Weather";
      humidity.textContent = `Humidity: ${currenthumidity}`;
      temp.textContent = `Current Temperature: ${currenttemp}`;
      description.textContent = `Description: ${currentcondition}`;

      card.appendChild(name);
      card.appendChild(temp);
      card.appendChild(humidity);
      card.appendChild(description);

      document.getElementById('currentWeather').appendChild(card);
    }
    else {
      console.log("Error: Data for Current Weather Conditions are undefined")
    }
    // WEATHER ALERTS!!!
    if (typeof data.alerts !== 'undefined') {
      // FILL IN ALERT WITH DATA
      const alert = data.alerts;
      document.getElementById('alert-event').textContent = alert.event;
      document.getElementById('alert-sender').textContent = alert.sender_name;
      document.getElementById('alert-description').textContent = alert.description;

      // QUE ALERT TO POP-UP IMMEDIEATLY
      let modal = document.getElementById("alertModal");
      let span = document.getElementsByClassName("close")[0];
      // If there is an alert, open the modal
      if (typeof alert !== 'undefined') {
        modal.style.display = "block";
      }
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      }
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      } 
    }
    else {
      console.log("There are no active weather alerts for this area")
    }
  });

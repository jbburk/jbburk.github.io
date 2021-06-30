// read JSON for town data
let requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
fetch(requestURL)
  .then((response) => response.json())
  .then((myInfo) => {
    // console.log(myInfo);
	
  if (document.getElementById("page").textContent == "Home"){
    for (let i = 0; i < myInfo.towns.length; i++) {
      if (i == 6 || i == 0 || i == 2) {
          let card = document.createElement('div');
          
          let info = document.createElement('section');
          let photo = document.createElement('figure');
          
          let name = document.createElement('h2');
          let motto = document.createElement('h3');
          let date = document.createElement('p');
          let people = document.createElement('p');
          let rain = document.createElement('p');
          let image = document.createElement('img');

          //info.setAttribute('class', 'info');
          
          name.textContent = myInfo.towns[i].name;
          motto.textContent = myInfo.towns[i].motto;
          date.textContent = 'Year Founded: ' + myInfo.towns[i].yearFounded;
          people.textContent = 'Population: ' + myInfo.towns[i].currentPopulation + 'souls';
          rain.textContent = 'Annual Rain Fall: ' + myInfo.towns[i].averageRainfall + 'in';
          image.setAttribute('src', 'images/'+myInfo.towns[i].photo);
          image.setAttribute('alt', myInfo.towns[i].name + ' Hometown');
          image.setAttribute('width', '400');
          image.setAttribute('height', '200');
          info.setAttribute('width', '400');
          info.setAttribute('height', '200');
          
          info.appendChild(name);
          info.appendChild(motto);
          info.appendChild(date);
          info.appendChild(people);
          info.appendChild(rain);
          card.appendChild(info);

          card.appendChild(photo);
          photo.appendChild(image);
          
          document.getElementById('home-section').appendChild(card);
      }}
    } else if (document.getElementById("page").textContent == "Preston"){
    console.log(myInfo.towns[6]);
    let town = myInfo.towns[6];

    let info = document.createElement('div')
    let title = document.createElement('h2');
    let rule = document.createElement('hr');
    let event1 = document.createElement('p');
    let event2 = document.createElement('p');
    let event3 = document.createElement('p');

    title.textContent = 'Upcoming Events';
    event1.textContent = town.events[0];
    event2.textContent = town.events[1];
    event3.textContent = town.events[2];

    info.appendChild(title);
    info.appendChild(rule);
    info.appendChild(event1);
    info.appendChild(event2);
    info.appendChild(event3);

    document.getElementById('townevent').appendChild(info);

    } else if (document.getElementById("page").textContent == "Soda Springs"){
      console.log(myInfo.towns[0]);
      let town = myInfo.towns[0];
      
      let info = document.createElement('div')
      let title = document.createElement('h2');
      let rule = document.createElement('hr');
      let event1 = document.createElement('p');
      let event2 = document.createElement('p');
      let event3 = document.createElement('p');

      title.textContent = 'Upcoming Events';
      event1.textContent = town.events[0];
      event2.textContent = town.events[1];
      event3.textContent = town.events[2];

      info.appendChild(title);
      info.appendChild(rule);
      info.appendChild(event1);
      info.appendChild(event2);
      info.appendChild(event3);

      document.getElementById('townevent').appendChild(info);

    } else if (document.getElementById("page").textContent == "Fish Haven"){
      console.log(myInfo.towns[2]);
      let town = myInfo.towns[2];
      
      let info = document.createElement('div')
      let title = document.createElement('h2');
      let rule = document.createElement('hr');
      let event1 = document.createElement('p');
      let event2 = document.createElement('p');
      let event3 = document.createElement('p');

      title.textContent = 'Upcoming Events';
      event1.textContent = town.events[0];
      event2.textContent = town.events[1];
      event3.textContent = town.events[2];

      info.appendChild(title);
      info.appendChild(rule);
      info.appendChild(event1);
      info.appendChild(event2);
      info.appendChild(event3);

      document.getElementById('townevent').appendChild(info);

    };
  });
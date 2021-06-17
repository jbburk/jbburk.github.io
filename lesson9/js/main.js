// set current year in footer
document.querySelector("#year").textContent = new Date().getFullYear();

// set hamburger menu
function toggleMenu() {
  console.log(document.getElementById("primarynav").classList);
  document.getElementById("primarynav").classList.toggle("hide");
}

// displays message on Fridays
if (new Date().getDay() == 5){
  console.log(document.getElementById("message").classList);
  document.getElementById("message").classList.toggle("showme");
} else {
  console.log(document.getElementById("message").classList);
  document.getElementById("message").classList.toggle("hideme");
}

let today = new Date();

// set current day of week in footer
document.querySelector("#date").textContent = curday();
function curday() {
  today = new Date();
  var day = today.getDate();
  var mm = today.getMonth();
  var year = today.getFullYear();
  var DoW = today.getDay();
  if (day < 10) day = "0" + day;
  let weekDay;
  switch (DoW) {
    case 0:
      weekDay = "Sunday, ";
      break;
    case 1:
      weekDay = "Monday, ";
      break;
    case 2:
      weekDay = "Tuesday, ";
      break;
    case 3:
      weekDay = "Wednesday, ";
      break;
    case 4:
      weekDay = "Thursday, ";
      break;
    case 5:
      weekDay = "Friday, ";
      break;
    case 6:
      weekDay = "Saturday, ";
      break;
    default:
      weekDay = "Unknown - " + DoW;
      break;
  }
  let month;
  switch (mm) {
    case 0:
      month = " January ";
      break;
    case 1:
      month = " Febuary ";
      break;
    case 2:
      month = " March ";
      break;
    case 3:
      month = " April ";
      break;
    case 4:
      month = " May ";
      break;
    case 5:
      month = " June ";
      break;
    case 6:
      month = " July ";
      break;
    case 7:
      month = " August ";
      break;
    case 8:
      month = " September ";
      break;
    case 9:
      month = " October ";
      break;
    case 10:
      month = " November ";
      break;
    case 11:
      month = " December ";
      break;
    default:
      month = " Unknown - " + mm;
      break;
  }
  return weekDay + day + month + year;
}

// Adjusts the rating slider for Storm Center
function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
const s = document.querySelector('#selected')
const sel = document.querySelector('#selectbrowser');
s.style.display = "block";
s.textContent = sel.value;

}

// read JSON for town data
let requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
fetch(requestURL)
  .then((response) => response.json())
  .then((myInfo) => {
    console.log(myInfo);
    console.log(myInfo.towns[6]);
	
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
                
                info.appendChild(name);
                info.appendChild(motto);
                info.appendChild(date);
                info.appendChild(people);
                info.appendChild(rain);
                card.appendChild(info);
                
                photo.appendChild(image);
                card.appendChild(photo);

                document.getElementById('home-section').appendChild(card);
            }
        }
  });
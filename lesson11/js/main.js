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

// Last Visited function

function lastVisit() {
  let mostRecent = localStorage.getItem("date");
if (!mostRecent) {
  mostRecent = new Date();
}

let parsed = Date.parse(mostRecent);
let days = getNumberOfDays(parsed, new Date().getTime());
document.getElementById("lastDate").innerHTML = days;
localStorage.setItem("date", new Date());

function getNumberOfDays(start, end) {
  const oneDay = 1000 * 60 * 60 * 24;
  let diffInDays = (end - start) / oneDay;
  return Math.round(diffInDays);
}};

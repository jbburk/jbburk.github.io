const temp = document.getElementById("currentTemp").textContent; 

const speed = parseFloat(document.getElementById("windSpeed").textContent);

let windchill = Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16)));

if(temp<=50 && speed>3) {
    document.getElementById("windChill").textContent = windchill+"\xB0F";
}   else {
    document.getElementById("windChill").textContent = "N/A";
}
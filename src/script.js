let now = new Date();
let h1 = document.querySelector("h1");
let date = now.getDate();
let hour = now.getHours();
let minute = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

h1.innerHTML = `${hour}:${minute}
</br>
${day}, ${month} ${date}`;

function showWeatherInformation(response) {
  document.querySelector("h2").innerHTML = response.data.name;
  temperature = Math.round(responde.data.main.temp);
  document.querySelector("h4").innerHTML = temperature;
  document.querySelector("#description-weather").innerHTML =
    response.data.weather[0].main;
}

function citySearch(city) {
  let apiKey = "b3d07099f6c92c0d246342a33fe4b913";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherInformation);
}
function weatherInput(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  citySearch(city);

  let citySubmit = document.querySelector("#search-form");
  citySubmit.addEventListener("submit", weatherInput);
}
function showlocation(position) {
  let apiKey = "b3d07099f6c92c0d246342a33fe4b913";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherInformation);
}
function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.currentPosition(showlocation);
}
let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", currentLocation);

citySearch("quito");

//import our sass style
import "./style.css";

//difine our variables, default page to london
var city = "london";
var cityId = "2643743";
var title = document.getElementById("title");
var todayWeather = document.getElementById("todayWeather");
var futureWeather = document.getElementById("futureWeather");
var error = document.getElementById("error");

//a fetch function to get our data and get the weather for 3pm each day, then populate the page with the results
function getWeatherData() {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?id=" +
      cityId +
      "&mode=json&APPID=3c239d3f84ca8afd307ce188b542bf69&units=metric"
  )
    .then(data => {
      return data.json();
    })
    .then(data => {
      var weekForecast = [];
      data.list.map((day, key) => {
        if (day.dt_txt.includes("15:00:00")) {
          weekForecast.push(day);
        }
      });
      error.innerHTML = "";
      futureWeather.innerHTML = "";

      weekForecast.map((day, key) => {
        futureWeather.innerHTML +=
          "<div><span class='weather_temp'>" +
          day.dt_txt.slice(0, 10) +
          "</span><span class='weather_temp'><img src='http://openweathermap.org/img/w/" +
          String(day.weather[0].icon) +
          ".png' />" +
          Math.round(day.main.temp) +
          "C</span><span class='weather_temp'>" +
          String(day.weather[0].main) +
          "</span><span class='weather_temp'>" +
          String(day.weather[0].description) +
          "</span></div>";
      });

      title.innerHTML = city + " weather report";
    });
}

//inital run on load
getWeatherData();

//A fetch request to compare search value and if is true will run getWeatherData() to reload the content.
var updateLocation = function() {
  let input = document.getElementById("input").value;

  fetch("../data")
    .then(data => {
      return data.json();
    })
    .then(data => {
      data.map(cityData => {
        if (
          cityData.name.toLowerCase() === input.toLowerCase() &&
          cityData.country === "GB"
        ) {
          cityId = cityData.id;
          city = cityData.name;
          error.innerHTML = "";
          getWeatherData();
        } else {
          error.innerHTML = "city not found";
        }
      });
    });
};

var submitCity = document.getElementById("submitCity");

submitCity.addEventListener("click", updateLocation);

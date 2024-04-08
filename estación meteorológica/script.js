const currentWeather = document.getElementById("currentWeather");
const locationH2 = document.getElementById("location");
const conditionP = document.getElementById("condition");
const Precipitation = document.getElementById("precipitation");
const wind = document.getElementById("wind");
const Humidity = document.getElementById("humidity");
const temperature = document.querySelector(".temperature");
const iconWeather = document.getElementById("iconWeather");
const weatherIconsPic = document.getElementById("weatherIcons");
const smallSquareGrades = document.querySelectorAll(".smallSquareGrades");
const baseUrl = "http://api.weatherapi.com/v1";



//obtener datos weather de API
const getWeatherApi = () => {
  fetch(
    "https://api.weatherapi.com/v1/current.json?key=5900cbebf0de4c56930190657240604&q=sevilla&aqi=no#"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("not working at the moment");
      }
      return response.json();
    })
    .then((data) => {
      getKnowWeather(data); //cambiar console.log x getKnowWeather para DOM.
    })
    .catch((error) => {
      console.log("error to obtain weather;", error);
    });
};

getWeatherApi();

//sacar dom datos JSON
const getKnowWeather = (data) => {
  locationH2.textContent = `${data.location.name}, ${data.location.country}`;
  temperature.textContent = `${data.current.temp_c}ºc`;
  weatherIconsPic.src = `${data.current.condition.icon}`;
  conditionP.textContent = data.current.condition.text;
  Precipitation.textContent = `Precipitacion: ${data.current.precip_mm}`;
  Humidity.textContent = `Humidity: ${data.current.humidity}`;
  wind.textContent = `wind: ${data.current.wind_kph}`;
  tempC.textContent = `${data.current.temp_c}ºc`; //probando
   

  
};
//console.log()


const getIcons = async () => {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=5900cbebf0de4c56930190657240604&q=sevilla&days=1&aqi=no&alerts=no"
    );
    if (!response.ok) {
      throw new Error("Getting hour not working!");
    }
    const data = await response.json();
    const infoApi = data.forecast.forecastday[0].hour
    // const infoIcon = data.forecast.forecastday[0].condition.icon
    // const infoC = data.forecast.forecastday[0].temp_c
    
   console.log(infoApi)
  } catch (error) {
    console.error("Error getting time:", error);
  }
};

getIcons();

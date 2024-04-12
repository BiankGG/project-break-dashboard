const currentWeather = document.getElementById("currentWeather");
const locationH2 = document.getElementById("location");
const conditionP = document.getElementById("condition");
const Precipitation = document.getElementById("precipitation");
const wind = document.getElementById("wind");
const Humidity = document.getElementById("humidity");
const temperature = document.querySelector(".temperature");
const iconWeather = document.getElementById("iconWeather");
const weatherIconsPic = document.getElementById("weatherIcons");
const smallSquareGradesList = document.querySelector(".smallSquareGrades");
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
};
//console.log()

// async :Cuando se llama a una función async, esta devuelve un elemento Promise.
// Cuando la función async devuelve un valor, Promise se resolverá con el
//  valor devuelto. Si la función async genera una excepción o algún valor,
//   Promise se rechazará con el valor generado.

const getIcons = async () => {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=5900cbebf0de4c56930190657240604&q=sevilla&days=1&aqi=no&alerts=no"
    );
    if (!response.ok) {
      throw new Error("Getting hour not working!");
    }
    const data = await response.json();
    const infoApiXHour = data.forecast.forecastday[0].hour;

    infoApiXHour.forEach((hour) => {
      const time = hour.time;
      const iconUrl = hour.condition.icon;
      const tempC = hour.temp_c;
      // console.log( `${time},${iconUrl},${tempC}`) //ver en consola
      const domHour = document.createElement("div");
      domHour.classList.add("Xhour");
  
      domHour.innerHTML = `
      <p>${time.substr(10)}</p>
      <img src='${iconUrl}' alt= 'icon'>
      <p>${tempC} ºc</p>
      `;
      
     
      smallSquareGradesList.appendChild(domHour);
      
    });

    console.log(infoApiXHour);
  } catch (error) {
    console.error("Error getting time:", error);
  }
};

getIcons();
//A string's substr() method extracts length, quita caracteres......
//characters from the string, counting from the start index.
let imagesBackground = [
  "capi.png",
  "deadpool.jpg",
  "strange.png",
  "vengadores.jpg",
  "spiderman.jpg",
  "stan.png",
  "thor.jpg",
  "viuda.png",
  "bruja.png",
];


function generateBackGround() {
  if (imagesBackground.length > 0) {
    const setBackgrounds = Math.floor(Math.random() * imagesBackground.length);
    const imageUrl = `url(/img/${imagesBackground[setBackgrounds]})`;
    document.body.style.backgroundImage = imageUrl;
    imagesBackground.splice(setBackgrounds, 1); 
  } else {
    imagesBackground = [
      "capi.png",
      "deadpool.jpg",
      "strange.png",
      "vengadores.jpg",
      "spiderman.jpg",
      "stan.png",
      "thor.jpg",
      "viuda.png",
      "bruja.png",
    ];
  }
}
generateBackGround();
setInterval(generateBackGround, 9000);
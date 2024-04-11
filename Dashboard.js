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

// clock+date+phrase

const time = document.getElementById("time");
const date = document.getElementById("date");
const frase = document.getElementById("frase");

const frases = [
  {
    time: "07:01-12:00",
    message: "Good morning world! lets do javascript!",
  },
  {
    time: "12:00-14:00",
    message: "Good afternoon, time to eat!",
  },
  {
    time: "14:01-16:00",
    message: "Hope you had a great lunch!",
  },
  {
    time: "16:01-18:00",
    message: "Rest, take a nap!",
  },
  {
    time: "18:01-22:00",
    message: "lets get down to it!",
  },
  {
    time: "22:01-00:00",
    message: "Stop the world, im getting down!",
  },
  {
    time: "00:01-7:00",
    message: "night, night!",
  },
];

function addZero(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

const showHour = setInterval(() => {
  const local = new Date();
  //console.log(local)
  let hours = addZero(local.getHours());
  let minutes = addZero(local.getMinutes());
  let seconds = addZero(local.getSeconds());

  time.textContent = hours + ":" + minutes + ":" + seconds;
  date.textContent = showDate(); // hago una llamada a la function para que se muestre
}, 1000);

function showDate() {
  let local = new Date();
  let day = addZero(local.getDate());
  let month = addZero(local.getMonth() + 1);
  let year = local.getFullYear();
  return `${day}/${month}/${year}`; //formar una cadena de texto
}

const getMsg = setInterval(() => {
  const local = new Date();
  const timeNow = addZero(local.getHours()) + ":" + addZero(local.getMinutes()); //formatear la hora
  //console.log(timeNow)

  for (let i = 0; i < frases.length; i++) {
    const fraseTime = frases[i];
    const [first, last] = fraseTime.time.split("-");
    if (timeNow >= first && timeNow <= last) {
      frase.textContent = fraseTime.message;
      return;
    }
  }
}, 1000); //1 minuto
//console.log(getMsg)

//weather
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

// SecuredPassword
const lengthInput = document.getElementById("lengthInput");
const generateButton = document.querySelector("button");
const passWordR = document.getElementById("passWordR");

generateButton.addEventListener("click", function () {
  const length = parseInt(lengthInput.value);
  if (!length || length < 12 || length > 50) {
    alert("introduce a character between 12 & 50");
    return;
  }
  const password = generate(length);
  passWordR.textContent = "Your Password: " + password.join("");
});

const generate = (length) => {
  let options =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
  options = options.split("");
  let stored = [];
  //console.log(options)

  for (let i = 0; i < length; i++) {
    let randomCharacter = Math.floor(Math.random() * options.length);
    //console.log(randomCharacter);
    stored.push(options[randomCharacter]);
    //console.log(stored);
  }
  return stored;
};

//links

const addLinkButton = document.getElementById("addLinkButton");
const nameInput = document.getElementById("name-input");
const urlInput = document.getElementById("url-input");
const linksStorage = document.getElementById("linksStorage");

addLinkButton.addEventListener("click", function () {
  const nameLink = nameInput.value;
  const nameUrl = urlInput.value;
  //console.log(nameLink)
  if (nameLink === "" || nameUrl === "") {
    alert("Please fill NAME||LINK");
    return;
  }
  addLinksSaved(nameLink, nameUrl);
  addLinksDom();
});

function addLinksSaved(name, url) {
  let links = JSON.parse(localStorage.getItem("links-url")) || [];
  links.push({ name: name, url: url });
  localStorage.setItem("links-url", JSON.stringify(links));
}
//addLinksSaved()

function addLinksDom() {
  let links = JSON.parse(localStorage.getItem("links-url")) || [];
  linksStorage.innerHTML = "";

  links.forEach((link, indice) => {
    const li = document.createElement("li");
    li.classList.add("line");
    const a = document.createElement("a");
    a.classList.add("ahref");
    a.href = link.url;
    a.textContent = link.name;
    li.appendChild(a);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("BtnErase");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", function () {
      eraseBtn(indice);
      addLinksDom();
    });
    // console.log()
    // addLinksDom()
    li.appendChild(deleteBtn);
    linksStorage.appendChild(li);
  });
}
//addLinksDom();

const eraseBtn = (indice) => {
  let linksStored = JSON.parse(localStorage.getItem("links-url"));
  linksStored.splice(indice, 1);
  localStorage.setItem("links-url", JSON.stringify(linksStored));
};

document.addEventListener("DOMContentLoaded", () => {
  addLinksDom();
});

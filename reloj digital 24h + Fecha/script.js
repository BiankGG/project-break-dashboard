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
    message: "Hope you had a great lunch",
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
    time: "22:01- 00:00",
    message: "Stop the world, im getting down!",
  },
];

//  Tendrás que formatear las hora. Si las horas, minutos y segundos son
//  menores de 10 habrá que añadir un 0 delante para que quede como 01, 02

function addZero(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

const showHour = setInterval(() => {
  const local = new Date();

  let hours = addZero(local.getHours());
  let minutes = addZero(local.getMinutes());
  let seconds = addZero(local.getSeconds());

  time.textContent = hours + ":" + minutes + ":" + seconds;
  date.textContent = showDate(local); // hacemos una llamada a la function para que se muestre
}, 1000);

function showDate(dmy) {
  let day = addZero(dmy.getDate());
  let month = addZero(dmy.getMonth() + 1);
  let year = dmy.getFullYear();
  return `${day}/${month}/${year}`;
}

//defino variable y asigno function set setinterval()
//creo nuevo obj/fecha y hora, añadimos cero y concatena 

const getMsg= setInterval(() => {
  const local = new Date();
  const timeNow = addZero(local.getHours()) + ":" + addZero(local.getMinutes());
  for (const fraseTime of frases) {
    const [first,last] = fraseTime.time.split("-");
    if(timeNow >= first && timeNow <= last){
      frase.textContent = fraseTime.message;
      return ;
    }
    
  }
  
},60000);


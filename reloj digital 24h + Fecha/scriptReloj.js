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

//  Tendrás que formatear las hora. Si las horas, minutos y segundos son
//  menores de 10 habrá que añadir un 0 delante para que quede como 01, 02
//new date() Cuando es llamado como un constructor, retorna un nuevo objeto

function addZero(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}
////defino variable y asigno function set setinterval()
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

// var Navidad = new Date("December 25, 2014 23:15:30");
// var mes = Navidad.getMonth();
// console.log(mes); // 11
//= asignamos 
//variables 

//capturo frase,fecha y hora. Añado cero y concatena

const getMsg = setInterval(() => {
  const local = new Date();
  const timeNow = addZero(local.getHours()) + ":" + addZero(local.getMinutes());//formatear la hora
  //console.log(timeNow)
  //iterar sobre cada elemento en arreglo en frases
  for (let i = 0; i < frases.length; i++) {
    const fraseTime = frases[i];//elemento acceder iterando al objeto frases
    const [first, last] = fraseTime.time.split("-");//divide la cadena 
    if (timeNow >= first && timeNow <= last) {
      frase.textContent = fraseTime.message;// imprimir propiedad msg
      return;
    }
  }
}, 1000); //1 minuto
//console.log(getMsg)
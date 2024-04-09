const lengthInput = document.getElementById("lengthInput");
const generateButton = document.querySelector("button");
const passWordR = document.getElementById("passWordR");

//eventlistener / alerta / asi long incorrecta
//parsea para convertir cadena en numero entero
//function genere password

// let upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let lowerCase ="abcdefghijklmnopqrstuvwxyz";
// let numbers = "0123456789";
// let simbols = "!@#$%^&*()-_=+"
//length no tiene un valor valido es falsy?? !length

generateButton.addEventListener("click", function () {
  const length = parseInt(lengthInput.value);
  if (!length || length < 12 || length > 50) {
    alert("introduce a character between 12 & 50");
    return;
  }
  const password = generate(length);
  passWordR.textContent = "Your Password: " + password.join(""); //elimino las comas utilizando join()
});

// for (var i = 0; i < 9; i++) {
//     n += i;
//     mifuncion(n);
//   }
//parametro longitud deseada cadena
//split('') hacer caracter individual
//
//push al final del array
const generate = (length) => {
  // let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // let lowerCase ='abcdefghijklmnopqrstuvwxyz';
  // let numbers ='0123456789';
  // let simbols ='!@#$%^&*()-_=+';
  let options = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
  options = options.split("");//convertir en un array/separamos cadena caracter string
  let stored = [];
  //console.log(options)

  for (let i = 0; i < length; i++) {
    let randomCharacter = Math.floor(Math.random() * options.length); //agregar length obtener la propiedad
    //console.log(randomCharacter);
    stored.push(options[randomCharacter]); // accede posicion indicada por el valor de RC[],.()
    //console.log(stored);
  }
  return stored;
};

// El método sort() ordena los elementos de un arreglo 
// (array) localmente y devuelve el arreglo ordenado

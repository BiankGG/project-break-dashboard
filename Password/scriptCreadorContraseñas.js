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

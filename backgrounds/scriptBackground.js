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
  "peterG.jpg",
  "peter.png"
];

//crear una function para entrar en array y pasar una a una
//entrar en la carpeta img
//formula seleccionar imagenes.lenght/indice aleatoriedad
//template string?????

function generateBackGround() {
  if (imagesBackground.length > 0) {
    const setBackgrounds = Math.floor(Math.random() * imagesBackground.length);
    // console.log(setBackgrounds)
    const imageUrl = `url(img/${imagesBackground[setBackgrounds]})`; //indice aleatorio
    // console.log(imageUrl)
    document.body.style.backgroundImage = imageUrl;
    imagesBackground.splice(setBackgrounds, 1); //no iterar la imagen
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
      "peterG.png",
      "peter.png"
    ];
  }
}
generateBackGround();
setInterval(generateBackGround, 9000); // det interval para que cambie cada Xseg.

// splice(): Si especifica un número diferente de elementos a agregar que
//  los que se eliminarán, el array tendrá
//  un tamaño diferente al original una vez finalizada la llamada.

const addLinkButton = document.getElementById("addLinkButton");
const nameInput = document.getElementById("name-input");
const urlInput = document.getElementById("url-input");
const linksStorage = document.getElementById("linksStorage");

//funcionamiento de añadir Links
//persistencia links
//funcionamiento eliminar link-links

//agregar un evento al boton, cuando introducimos datos en input
//function para almacenar en localstorage y convertir en obj/array key y value
//function para createElement li,ahref



addLinkButton.addEventListener("click", function () {
  const nameLink = nameInput.value;
  const nameUrl = urlInput.value;
  //console.log(nameLink)
  if (nameLink === "" || nameUrl === "") {
    alert("Please fill NAME||LINK");
    return;
  }
  addLinksSaved(nameLink, nameUrl); //agregamos function aparezca en local 
  addLinksDom(); //agregamos a la function
});

//creo function con parametros y crear key/value en locasStorage
//creo function con parametros name/url para almacenar localStorage
//obtengo valor asociado a la clave "links-url"/convierto cadena JSON en JASON.p=obj
//metodo llamada del valor 'links-url' y se convierte en json que representa datos array;
//convertimos link en cadena Json y guardamos localStorage con key links-url
function addLinksSaved(name, url) {
  let links = JSON.parse(localStorage.getItem("links-url")) || [];
  links.push({ name: name, url: url });
  localStorage.setItem("links-url", JSON.stringify(links));
}
//addLinksSaved()

// crear function para añadir dom???
// eliminar nodo hijos
// link es el elemento actual del array y en cada iteracion, link tomara nombre de uno de los elemntos del array.
// indice del elemento actual del array links, itera desde 0 a -1???????

function addLinksDom() {
  let links = JSON.parse(localStorage.getItem("links-url")) || [];
  linksStorage.innerHTML = "";
  //itera sobre cada elemento del array links//indice lo utilizamos boton LOCO
  links.forEach((link, indice) => {
    const li = document.createElement("li");
    li.classList.add("line");
    const a = document.createElement("a");
    a.classList.add("ahref");
    a.href = link.url; //tomando propiedad
    a.textContent = link.name; //establecer
    li.appendChild(a); //creamos appenChild donde a es hijo de li........

    //aqui añado boton LOCO borrar/CN
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("BtnErase");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", function () {
      eraseBtn(indice);
      addLinksDom(); // actualizar reflejar cambios en li/a/textContent
    });
    // console.log()
    // addLinksDom()
    li.appendChild(deleteBtn); // hijo para que se muestre
    linksStorage.appendChild(li);
  });
}
//addLinksDom();

//hacer funcionar al boton erase / que tiene que hacer para añadir a todos los enlaces....
// parametro forEach indice/eliminar enlaces almacenados basado en indice
// metodo splice del array linksStored y pasamos argumento indice, elimina todos los elementos del array apartir del indice
// metodo splice(): Si especifica un número diferente de elementos a agregar que los que se 
// eliminarán, el array tendrá un tamaño diferente al original una vez finalizada la llamada.

const eraseBtn = (indice) => {
  let linksStored = JSON.parse(localStorage.getItem("links-url"));
  linksStored.splice(indice, 1);//resultado de json linksStored
  localStorage.setItem("links-url", JSON.stringify(linksStored));
};

// //Sintaxis
// Use el nombre del evento en métodos como addEventListener()
//  o establezca una propiedad de controlador de eventos.

// JS
// Copiar en el portapapeles
// addEventListener("DOMContentLoaded", (event) => {});........

document.addEventListener('DOMContentLoaded', ()=>{
  addLinksDom()
})
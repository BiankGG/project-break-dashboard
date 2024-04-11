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

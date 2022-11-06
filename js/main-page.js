let photo = document.querySelector(".photo");
let conteiner = document.querySelector(".me");
let nameMe = document.querySelector(".name");
let bio = document.querySelector(".bio");
//const screenWidth = window.screen.width;

if (screenWidth < 400) {
  photo.style.height = "400px";
  conteiner.style.gridTemplateColumns = "none";
  nameMe.style.textAlign = "center";
} else {
  photo.style.height = "300px";
  conteiner.style.gridTemplateColumns = "1fr 13fr";
  nameMe.style.textAlign = "left";
}

if (screenWidth > 800) {
  bio.style.columnCount = "2";
} else {
  bio.style.columnCount = "1";
}

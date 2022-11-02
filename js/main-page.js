let photo = document.querySelector(".photo");
let conteiner = document.querySelector(".me");
let nameMe = document.querySelector(".name");
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

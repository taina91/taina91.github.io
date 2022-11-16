let pics = document.querySelectorAll(".pic");

for (let pic of pics) {
  pic.onclick = function () {
    if (pic.classList.contains("horisontal")) {
      pic.classList.toggle("no-active");
      pic.classList.toggle("active-horisontal");
    } else {
      pic.classList.toggle("no-active");
      pic.classList.toggle("active-vertical");
    }
  };
}

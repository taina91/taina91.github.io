let border = document.querySelector(".contacts");
let contactsItems = document.querySelectorAll(".contacts-item");
const screenWidth = window.screen.width;

if (screenWidth < 400) {
  border.style.borderRight = "0";
  border.style.borderBottom = "2px solid black";
  for (let contactsItem of contactsItems) {
    contactsItem.style.textAlign = "center";
  }
} else {
  border.style.borderBottom = "0";
  border.style.borderRight = "2px solid black";
  for (let contactsItem of contactsItems) {
    contactsItem.style.textAlign = "left";
  }
}

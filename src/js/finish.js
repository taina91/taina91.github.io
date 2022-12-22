const ratingItemTemplate = document.querySelector('#rating-template').content; 
const nameMas = JSON.parse(localStorage.getItem('mass'));
const rating = document.querySelector(".rating");

//создание масиива юзеров
let userMas = [];
for(let i = 0; i < nameMas.length; i++){
    userMas[i] = JSON.parse(localStorage.getItem(nameMas[i]));
}

//сортировка
for (let j = userMas.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (userMas[i].score < userMas[i + 1].score) {
        let temp = userMas[i];
        userMas[i] = userMas[i + 1];
        userMas[i + 1] = temp;
      }
    }
  }

//добавление в спи сок
for(let i = 0; i < nameMas.length; i++){
    let newItemReting =  ratingItemTemplate.querySelector('.rating__row').cloneNode(true);  
    newItemReting.querySelector(".place").textContent = i+1;
    newItemReting.querySelector(".name").textContent = userMas[i].name;
    newItemReting.querySelector(".score").textContent = userMas[i].score;
    rating.appendChild(newItemReting);
}
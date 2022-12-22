const user = {
    name: "Ivan",
    score: 0,
    difficulty: 'lite'
}

//массив имен чтобы запоминать порядок
let nameMas = [];
if(localStorage.getItem('mass') == null){
    localStorage.setItem('mass', JSON.stringify(nameMas));
}
//кнопка
let button = document.querySelector(".button");
//чекбоксы
let hard = document.querySelector("#hard");
let lite = document.querySelector("#lite");
//имя чела
let login = document.querySelector("#name");

let yesButton = document.querySelector(".yes");
let noButton = document.querySelector(".no");
let okButton = document.querySelector(".ok");
let yButton = document.querySelector(".yes-yes");
let nButton = document.querySelector(".yes-no");
const desc = document.querySelector(".desc");
const descNo = document.querySelector(".desc-no");
const descYes = document.querySelector(".desc-yes");


button.onclick = function() {
    if(login.value !== ""){
        //проверяю есть ли чел с таким именем
        if (localStorage.getItem(login.value) == null) {
            nameMas = JSON.parse(localStorage.getItem('mass'));
            nameMas.push(login.value);
            localStorage.setItem('mass', JSON.stringify(nameMas));
            //выбираю уровен сложности чела 
            if(hard.checked)
                user.difficulty = hard.value;
            else if(lite.checked)
                user.difficulty = lite.value;
            user.name = login.value;
            //добавляю юзера в локал сторедж
            localStorage.setItem(login.value, JSON.stringify(user));
            window.location.href = 'game.html';
        }
        else{
            desc.classList.remove("hide");
            yesButton.onclick = function() {
                desc.classList.add("hide");
                descYes.classList.remove("hide");
                yButton.onclick = function() {
                    nameMas = JSON.parse(localStorage.getItem('mass'));
                    nameMas.splice(nameMas.indexOf(login.value), 1);
                    nameMas.push(login.value);
                    localStorage.setItem('mass', JSON.stringify(nameMas));
                    if(hard.checked)
                        user.difficulty = hard.value;
                    else if(lite.checked)
                        user.difficulty = lite.value;
                    localStorage.setItem(login.value, JSON.stringify(user));
                    window.location.href = 'game.html';
                }
                nButton.onclick = function() {
                    descYes.classList.add("hide");
                    descNo.classList.remove("hide");
                    okButton.onclick = function() {
                        descNo.classList.add("hide");
                    }
                }
            }
            noButton.onclick = function() {
                desc.classList.add("hide");
                descNo.classList.remove("hide");
                okButton.onclick = function() {
                    descNo.classList.add("hide");
                }
            }
        }
    }
    else{
        alert("Вы не ввели имя");
    }
}

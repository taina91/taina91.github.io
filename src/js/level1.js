let tempLevel = JSON.parse(localStorage.getItem(nameMas[nameMas.length - 1]));

let lite = ["src/img/batareya.png", "src/img/provod.png", "src/img/micro.png", "src/img/truba.png", "src/img/bat.png"];
let hard = ["src/img/bat.png", "src/img/izolenta.png", "src/img/truba.png", "src/img/micro.png", "src/img/skotch.png", "src/img/batareya.png", "src/img/multimetr.png", "src/img/provod.png"];
const cardTemplate = document.querySelector('#card-template').content; 
const listOn = document.querySelector(".js-list-on");

let itemOn = [];
let itemTo = [];

let tempLev1;

if(tempLevel.difficulty == 'lite'){
    for(let i = 0; i < 5; i++){
        let newCard =  cardTemplate.querySelector('.js-card').cloneNode(true);  
        newCard.style.backgroundImage = "url(" + lite[i] + ")";
        newCard.style.backgroundRepeat = "no-repeat";
        listOn.appendChild(newCard);
        itemOn.push(i+1);
        tempLev1 = 1;
    }
} 
if(tempLevel.difficulty == 'hard'){
    for(let i = 0; i < 8; i++){
        let newCard =  cardTemplate.querySelector('.js-card').cloneNode(true);  
        newCard.style.backgroundImage = "url(" + hard[i] + ")";
        newCard.style.backgroundRepeat = "no-repeat";
        listOn.appendChild(newCard);
        itemOn.push(i+1);
        tempLev1 = 2;
    }  
}

const dragAndDrop = () => {
    let cards = document.querySelectorAll(".js-card");;
    const listOn = document.querySelector(".js-list-on");
    const listTo = document.querySelector(".js-list-to");

    const dragStart = function() {
        setTimeout(() => {
            this.classList.add('hide');
        }, 0)
    }
    const dragEnd = function() {
        this.classList.remove('hide');
    }

    const dragOver = function(evt){
        evt.preventDefault(); 
    }

    const dragEnter = function(){
        this.classList.add('hovered');
    }

    const dragLeave = function(){
        this.classList.remove('hovered');
    }

    const dragDropTo = function(){
        let cardOn;
        for (let i = 0; i < cards.length; i++) {
            if(cards[i].classList.contains('hide')){
                cardOn = cards[i];
                itemTo.push(i+1);
                itemOn.splice(itemOn.indexOf(i+1), 1);
            }
        }
        this.append(cardOn);
        this.classList.remove('hovered');
    }
    const dragDropOn = function(){
        let cardOn;
        for (let i = 0; i < cards.length; i++) {
            if(cards[i].classList.contains('hide')){
                cardOn = cards[i];
                itemOn.push(i+1);
                itemTo.splice(itemTo.indexOf(i+1), 1);
            }
        }
        this.append(cardOn);
        this.classList.remove('hovered');
    }

    listTo.addEventListener('dragover', dragOver);
    listTo.addEventListener('dragenter', dragEnter);
    listTo.addEventListener('dragleave', dragLeave);
    listTo.addEventListener('drop', dragDropTo);

    listOn.addEventListener('dragover', dragOver);
    listOn.addEventListener('dragenter', dragEnter);
    listOn.addEventListener('dragleave', dragLeave);
    listOn.addEventListener('drop', dragDropOn);

    for(card of cards){
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);
    }
}

dragAndDrop();

const checkButtou1 = document.querySelector(".check-lev1");
const checkButtou2 = document.querySelector(".check-lev2");
const level1 = document.querySelector(".level1");
const level2 = document.querySelector(".level2");
const prev2 = document.querySelector(".js-prev-lev2");

let countTryLev1 = 0;

checkButtou1.onclick = function() {
    countTryLev1 += 1;
    let c = 0;
    for(let i = 0; i < itemTo.length; i++){
        if(((itemTo[i] == 1 || itemTo[i] == 2 || itemTo[i] == 4 || itemTo[i] == 7 || itemTo[i] == 8) && tempLev1 == 2 && itemTo.length == 5) 
            || ((itemTo[i] == 2 || itemTo[i] == 3 || itemTo[i] == 5) && tempLev1 == 1 && itemTo.length == 3)){
            c+=1;
        }
    }
    if((c == 5 && tempLev1 == 2) || (c == 3 && tempLev1 == 1)){
        if(milliseconds >= 240000){
            score += 100*(6 - countTryLev1);
        }
        else {
            score += 100*(6 - countTryLev1) - (Math.floor((240000-milliseconds)/30000) + 1)*10;
        }
        alert("Все верно");
        scoreItem.innerHTML = score;
        pauseTime();
        level1.classList.add("hide");
        level2.classList.remove("hide");
        descriptionLev2.classList.remove("hide");
        checkButtou1.classList.add("hide");
        checkButtou2.classList.remove("hide");
        
    }
    else{
        attempts = attempts - 1;
        if(attempts == 0) finishGameBad(1);
        else {
            alert("Попробуй еще");
            for(heart of hearts){
                if(heart.classList.contains("broken") == false){
                    heart.classList.add("broken");
                    break;
                }
            }
        }
    }
};
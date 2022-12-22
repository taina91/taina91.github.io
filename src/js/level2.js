const cardListLite = document.querySelector(".js-card-list-lite");
const cardListHard = document.querySelector(".js-card-list-hard");
const cardListToLite = document.querySelector(".js-card-list-to-lite");
const cardListToHard = document.querySelector(".js-card-list-to-hard");

if(tempLevel.difficulty == 'lite'){
    cardListLite.classList.remove("hide");
    cardListToLite.classList.remove("hide");
}
if(tempLevel.difficulty == 'hard'){
    cardListHard.classList.remove("hide");
    cardListToHard.classList.remove("hide");
}

let itemRight = [false, false, false];

function getClass (ev){
    if(ev.classList.contains("one")) return 1;
    if(ev.classList.contains("two")) return 2;
    if(ev.classList.contains("thir")) return 3;
    if(ev.classList.contains("four")) return 4;
}

const dragAndDropLev2 = () => {
    let cards;
    let cellsTo;
    let cellOn;
    if(tempLevel.difficulty == 'lite'){
        cards = document.querySelectorAll(".js-card-lev2-lite");
        cellsTo = document.querySelectorAll(".js-cell-to-lite");
        cellOn = document.querySelector(".js-card-list-lite");
    }
    else{
        cards = document.querySelectorAll(".js-card-lev2-hard");
        cellsTo = document.querySelectorAll(".js-cell-to-hard");
        cellOn = document.querySelector(".js-card-list-hard");
    }
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
        for(let i = 0; i < cards.length; i++){
            if(cards[i].classList.contains('hide')){
                cardOn = cards[i];
            }
        }
        if(getClass(cardOn) == getClass(this)) itemRight[getClass(this) - 1] = true;
        this.append(cardOn);
        cardOn.style.margin = "0";
        this.classList.remove('hovered');
    }

    const dragDropOn = function(){
        let cardOn;
        for(let i = 0; i < cards.length; i++){
            if(cards[i].classList.contains('hide')){
                cardOn = cards[i];
            }
        }
        if(itemRight[getClass(cardOn) - 1 ] == true) itemRight[getClass(cardOn) - 1] = false;
        this.append(cardOn);
        cardOn.style.margin = "10px 20px";
        this.classList.remove('hovered');
    }

    cellOn.addEventListener('dragover', dragOver);
    cellOn.addEventListener('dragenter', dragEnter);
    cellOn.addEventListener('dragleave', dragLeave);
    cellOn.addEventListener('drop', dragDropOn);

    for(cellTo of cellsTo){
        cellTo.addEventListener('dragover', dragOver);
        cellTo.addEventListener('dragenter', dragEnter);
        cellTo.addEventListener('dragleave', dragLeave);
        cellTo.addEventListener('drop', dragDropTo);
    }

    for(card of cards){
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);
    }
}
dragAndDropLev2();

let countTryLev2 = 0;

const level3 = document.querySelector(".level3");
const checkButtou3 = document.querySelector(".check-lev3");

function nextLevel (){
    level2.classList.add("hide");
    level3.classList.remove("hide");
    descriptionLev3.classList.remove("hide");
    checkButtou2.classList.add("hide");
    checkButtou3.classList.remove("hide");
}

const led = document.querySelector(".led-on");

checkButtou2.onclick = function() {
    countTryLev2 += 1;
    if(itemRight[0] == true && itemRight[1] == true && tempLevel.difficulty == 'lite'){
            led.style.backgroundImage = "url(src/img/led-on.png)";
            if(milliseconds >= 240000){
                score += 100*(6 - countTryLev2);
            }
            else {
                score += 100*(6 - countTryLev2) - (Math.floor((240000-milliseconds)/30000) + 1)*10;
            }
            scoreItem.innerHTML = score;
            setTimeout(nextLevel, 1000);
            pauseTime();
    } 
    else if(itemRight[0] == true && itemRight[1] == true && itemRight[2] == true && tempLevel.difficulty == 'hard'){
            let audio = new Audio();
            audio.src = "src/audio/beep.mp3";
            audio.autoplay = true;

            if(milliseconds >= 240000){
                score += 100*(6 - countTryLev2);
            }
            else {
                score += 100*(6 - countTryLev2) - (Math.floor((240000-milliseconds)/30000) + 1)*10;
            }
            scoreItem.innerHTML = score;
            setTimeout(nextLevel, 1000);
            pauseTime();
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

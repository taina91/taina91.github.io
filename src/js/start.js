let nameMas = JSON.parse(localStorage.getItem('mass'));

const descriptionStart = document.querySelector(".desc-start");
const descriptionLev1 = document.querySelector(".desc-level1");

const time = document.querySelector(".time");
let milliseconds = 300000;
let timer;

let attempts = 5;

let hearts = document.querySelectorAll(".heart");
let scoreItem = document.querySelector(".score");

let score = 0;

const startButtonLev1 = document.querySelector(".start-lev1");
const startButtonLev2 = document.querySelector(".start-lev2");
const descriptionLev2 = document.querySelector(".desc-level2");
const startButtonLev3 = document.querySelector(".start-lev3");
const descriptionLev3 = document.querySelector(".desc-level3");

const restartButton = document.querySelector(".restart");
const descriptionBadEnd = document.querySelector(".desc-bad-end");
let reason = document.querySelector(".reason");

const scoreEnd = document.querySelector(".score-end");
const descriptionGoodEnd = document.querySelector(".desc-good-end");

const endGameButton = document.querySelector(".endgame");

const startTime = () => {
    clearInterval(timer);
    timer = setInterval(() => {
        milliseconds -= 10;
        if(milliseconds <= 0){
            finishGameBad(2);
        }
        let dateTimer = new Date(milliseconds);
        time.innerHTML = 
                        ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' + 
                        ('0'+dateTimer.getUTCSeconds()).slice(-2);
    }, 10);
};

const pauseTime = () => {
    clearInterval(timer);
    milliseconds = 300000;
    time.innerHTML = "05:00";
};
 
startButtonLev1.onclick = function() {
    startTime();
    descriptionLev1.classList.add("hide");
};

startButtonLev2.onclick = function() {
    clearInterval(timer);
    milliseconds = 300000;
    time.innerHTML = '05:00';
    startTime();
    descriptionLev2.classList.add("hide");
};

startButtonLev3.onclick = function() {
    clearInterval(timer);
    milliseconds = 300000;
    time.innerHTML = '05:00';
    startTime();
    descriptionLev3.classList.add("hide");
};

function finishGameBad (n){ //1 -- конец из-за конца попыток 2 -- конец из-за конца времени
    if(n == 1){
        reason.textContent = "У тебя закончились попытки"
    }
    if(n == 2){
        reason.textContent = "У тебя закончилось время"
    }
    descriptionBadEnd.classList.remove("hide");
}

function finishGameGood (){ 
    let user = JSON.parse(localStorage.getItem(nameMas[nameMas.length - 1]));
    user.score = score;
    localStorage.setItem(user.name, JSON.stringify(user));
    window.location.href = 'finish.html';
}

endGameButton.onclick = function(){
    finishGameGood();
};

restartButton.onclick = function() {
    location.reload(); 
    return false;
};


let task1 = document.querySelector(".js-task-1");
let task2 = document.querySelector(".js-task-2");
let task3 = document.querySelector(".js-task-3");
let formula = document.querySelector(".formula");

let tasks = ["Какова сила тока в резисторе, если его сопротивление 12 Ом, а напряжение на нем 120 В?",
            "Сопротивление проводника 6 Ом, а сила тока в нем 0,2 А. Определите напряжение на концах проводника.",
            "Определите сопротивление проводника, если при напряжении 110 В сила тока в нем 2 А",
            "С какой силой взаимодействуют два заряда по 10нКл, находящиеся на расстоянии 3см друг от друга, ответ дайте в Ньютонах",
            "На каком расстоянии друг от друга заряды 1мкКл и 10нКл взаимодействуют с силой 9мН. Ответ дайте в сантиметрах.", 
            "Заряженный шарик приводят в соприкосновение с точно таким же незаряженным шариком. Находясь на расстоянии 15см шарики отталкиваются с силой 1мН. Каков был первоначальный заряд заряженного шарика? Ответ дайте в мкКл."];

let answs = ["10", "1.2", "55", "0.001", "10", "0.1"];

let forms = ["src/img/formula.png", "src/img/formula2.png"];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let temp = getRandomInt(0, 2);

task1.textContent = tasks[temp*3];
task2.textContent = tasks[temp*3 + 1];
task3.textContent = tasks[temp*3 + 1];
formula.style.backgroundImage = "url(" + forms[temp] + ")";

let countTryLev3 = 0;

const answers = document.querySelectorAll(".answer");

checkButtou3.onclick = function() {
    countTryLev3 += 1;
    if(answers[0].value == answs[temp*3] && 
       answers[1].value == answs[temp*3+1] &&
       answers[2].value == answs[temp*3+2]){
            if(milliseconds >= 240000){
                score += 100*(6 - countTryLev2);
            }
            else {
                score += 100*(6 - countTryLev2) - (Math.floor((240000-milliseconds)/30000) + 1)*10;
            }
            alert("Все верно");
            scoreItem.innerHTML = score;
            finishGameGood();
        } 
    else{
        attempts = attempts - 1;
        for(heart of hearts){
            if(heart.classList.contains("broken") == false){
                heart.classList.add("broken");
                break;
            }
        }
        if(attempts == 0) finishGameBad(1);
        else alert("Попробуй еще");
    }
};
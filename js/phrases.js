let phrasesEng = ["Consuetudo est altera natura", "Nota bene", "Nulla calamitas sola", "Per aspera ad astra"];
let phrasesRus = ["Привычка - вторая натура", "Заметьте хорошо!", "Беда не приходит одна", "Через тернии к звёздам"];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let used = new Array();

function getPhrase(){
  let ind;
  let flag;
  do{
    flag = true;
    ind = getRandomInt(0,phrasesRus.length);
    for  (let el in used) {                                         
      if (used[el] == ind) flag = false;                  
    }
  }while(!flag)
  used.push(ind);
  return phrasesRus[ind];
};

let create = document.querySelector('.create');
let color = document.querySelector('.color');
let phraseList = document.querySelector('.phrases-space');

const phraseTemplate = document.querySelector('#phrase-template').content; 

let warnind = document.querySelector('.nevidno');

create.onclick = function () {
  if(used.length == phrasesRus.length) {
    warnind.classList.add('warning');
    warnind.classList.remove('nevidno');
  }
  else{
    let newPhrase =  phraseTemplate.querySelector('.phraseRus').cloneNode(true);  
    newPhrase.textContent = getPhrase();
    newPhrase.addEventListener('click', () => {
      newPhrase.classList.toggle('phraseEng'); 
      newPhrase.classList.toggle('phraseRus'); 
      newPhrase.classList.toggle('move');
      newPhrase.classList.toggle('unmove');
      if(newPhrase.classList.contains('phraseEng') == true){
        //let text = newPhrase.textContent;
        //let index = phrasesRus.indexOf(newPhrase.textContent);
        newPhrase.textContent = phrasesEng[phrasesRus.indexOf(newPhrase.textContent)];
      }
      else if(newPhrase.classList.contains('phraseRus')){
        //let text = newPhrase.textContent;
        //let index = phrasesEng.indexOf(newPhrase.textContent);
        newPhrase.textContent = phrasesRus[phrasesEng.indexOf(newPhrase.textContent)];
      }
      step = step + 1;
    });
    phraseList.appendChild(newPhrase);
  }
};

let clck = 0;

color.onclick = function () {
  let phrasesRus = document.querySelectorAll('.phraseRus');
    for (let phraseRus of phrasesRus){
      if(clck % 2 == 0){
        phraseRus.style.backgroundColor = 'white'; 
      }
      else{
        phraseRus.style.backgroundColor = 'blueviolet'; 
      }
    }
    clck = clck + 1;
};

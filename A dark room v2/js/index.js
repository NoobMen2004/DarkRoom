function obj(elem) {
  return document.getElementById(elem);
}

function imag(elem) {
  return document.getElementById(elem);
}

function auids(elem){
  let audio = new Audio(elem);
  audio.play();

  return audio;
}

function instImg(elems, elemImg) {
  elems.style.backgroundImage = 'url(' + elemImg + ')';
  elems.style.backgroundRepeat = 'no-repeat';
  elems.style.backgroundSize = 'cover';
  elems.style.backgroundPosition = 'center';

  return elems;
}
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset,
    height: box.height + window.pageYOffset,
    width: box.width + window.pageXOffset,
    x: box.x + window.pageXOffset,
    y: box.y + window.pageYOffset
  };
}

let star = obj('star');
let game = obj('game');
let timer = obj('timer');
let otv4 = obj('otv4');
let otVs = {
  otv1:obj('otv1'),
  otv2:obj('otv2'),
  otv3:obj('otv3')};
let skaffchis = obj('skaffchis');
let pr1_1 = obj('pr1_1');
let pr2_1 = obj('pr2_1');
let pr3_1 = obj('pr3_1');
let pr4_1 = obj('pr4_1');
let poin = 0;
let recor = 0;
let dameg = 0;
let inrface = obj('inrface');
let pos1 = getCoords(inrface);
console.log(pos1);

let imgss = {
  img1: 'img/book.png',
  img2: 'img/book2.png',
  img3: 'img/kalash.png',
  img4: 'img/lupa.png',
  img5: 'img/nitka.png',
  img6: 'img/nitka2.png',
  img7: 'img/pest.png',
  img8: 'img/pest2.png',
  img9: 'img/ruck.png',
  img10: 'img/tel.png',
  img11: 'img/tel2.png',
  img12: 'img/tel3.jpg',
  img13: 'img/war.png',
  img14: 'img/tank.png',
  img15: 'img/subl.png'
};

let ia = {};
let ias = {};

for (let i = 1; i <= 4; i++) {
  let legs = 'pr' + i +'_3';
  let legg = obj(legs);
  ia[legs] = legg;
}
for (let i = 2; i <= 6; i++) {
    if (i != 3) {
      for (let a = 1; a <= 4; a++) {
        let legs = 'pr' + a +'_' + i;
        let legg = obj(legs);
        instImg(legg,ObFonRandom())
        ias[legs] = legg;
    }  
  }
}

function upens() {
  
}
function ObRandom() {
  let keyss = Object.keys(ia);
  let getrantom = Math.floor(Math.random() * keyss.length);
  return ia[keyss[getrantom]];
}

function ObFonRandom() {
  let keyss = Object.keys(imgss);
  let getrantom = Math.floor(Math.random() * keyss.length);
  return imgss[keyss[getrantom]];
}

let previousImg;

for (let i = 1; i <= 4; i++) {
  let legs = 'pr' + i + '_3';
  let imms;

  do {
    imms = ObFonRandom();
  } while (imms === previousImg);

  instImg(ia[legs], imms);
  previousImg = imms;
}

function rest(){
  star.style.zIndex = '3';
  for (let i = 1; i <= 4; i++) {
    let legs = 'pr' + i + '_3';
    let imms;

    do {
      imms = ObFonRandom();
    } while (imms === previousImg);

    instImg(ia[legs], imms);
    previousImg = imms;
  }
  for (let i = 2; i <= 6; i++) {
    if (i != 3) {
      for (let a = 1; a <= 4; a++) {
        let legs = 'pr' + a +'_' + i;
        let legg = obj(legs);
        instImg(legg,ObFonRandom())
        ias[legs] = legg;
      }  
    }
  }
}
function overs(){
  dameg = 0;
  poin = 0;
  rest();
  auids('audio/eab.mp3');
  alert('Game Over!');
  pr1_1.innerHTML = poin;
  pr2_1.innerHTML = dameg;
}

star.style.left =  pos1.left +'px';
star.style.top =  pos1.top - 5 +'px';
star.style.width = pos1.width + 10 + 'px';
star.style.height = pos1.height + 'px';

star.onclick = function start() {
  auids('audio/mbut.mp3');
  otv4.onclick = function start() {
    rest();
    auids('audio/mbut.mp3');
  };

  let ti = 4;
  timer.style.zIndex = '3';
  let interv = setInterval(function(){
    timer.innerHTML = '0'+ti;
    ti--;
    if (ti == -1) {
      clearInterval(interv);
      timer.style.zIndex = '-3';
      timer.innerHTML = '';
    }
  },1000);

  let otImg = ObRandom();
  let blok = otImg.style.backgroundImage; // сохраняем фон фото в переменную blok
  otImg.style.background = 'none';

  star.style.zIndex = '-1';
  let otC = {
    c1: ObFonRandom(),
    c2: ObFonRandom(),
    c3: ObFonRandom()
  };
  
  otv1.style.background = 'url('+otC.c1+')';
  otv1.style.backgroundRepeat = 'no-repeat';
  otv1.style.backgroundSize = 'cover';
  otv1.style.backgroundPosition = 'center';
  otv2.style.background = 'url('+otC.c2+')';
  otv2.style.backgroundRepeat = 'no-repeat';
  otv2.style.backgroundSize = 'cover';
  otv2.style.backgroundPosition = 'center';
  otv3.style.background = 'url('+otC.c3+')';
  otv3.style.backgroundRepeat = 'no-repeat';
  otv3.style.backgroundSize = 'cover';
  otv3.style.backgroundPosition = 'center';

  function getRandomCid() {
    let keyss = Object.keys(otVs);
    let randomIndex = Math.floor(Math.random() * keyss.length);
    return otVs[keyss[randomIndex]];
  }
  let keysblocsk = getRandomCid();
  keysblocsk.style.background = blok;
  keysblocsk.style.backgroundRepeat = 'no-repeat';
  keysblocsk.style.backgroundSize = 'cover';

  otv1.onclick = function () {
    if (otv1.style.backgroundImage == blok) { // сравниваем с сохраненным фоном фото
      auids('audio/mbut.mp3');
      poin++;
      pr1_1.innerHTML = poin;
      if (poin > recor){
        pr4_1.innerHTML = poin;
        recor = poin;
      }
      rest();
    } else {
      auids('audio/Errors.mp3');
      dameg++;
      pr2_1.innerHTML = dameg;
      if (dameg >= 5){
        overs();
      }
    }
  }
  otv2.onclick = function () {
    if (otv2.style.backgroundImage == blok) { // сравниваем с сохраненным фоном фото
      auids('audio/mbut.mp3');
      poin++;
      pr1_1.innerHTML = poin;
      if (poin > recor){
        pr4_1.innerHTML = poin;
        recor = poin;
      }
      rest();
    } else {
      auids('audio/Errors.mp3');
      dameg++;
      pr2_1.innerHTML = dameg;
      if (dameg >= 5){
        overs();
      }
    }
  }
  otv3.onclick = function () {
    if (otv3.style.backgroundImage == blok) { // сравниваем с сохраненным фоном фото
      auids('audio/mbut.mp3');
      poin++;
      pr1_1.innerHTML = poin;
      if (poin > recor){
        pr4_1.innerHTML = poin;
        recor = poin;
      }
      rest();
    } else {
      auids('audio/Errors.mp3');
      dameg++;  
      pr2_1.innerHTML = dameg;
      if (dameg >= 5){
        overs();
      }
    }
  }
}

"use strict";
// Main site js file for Dennis.
function _Initialize() {
    centerSun();
}

let moveChange = 50;
let moveChangeBottom = -50;
let moveChangeLeft = 50;
let moveChangeRight = -50;

function centerSun() {
  let eSun = document.getElementById('imgSun');
  eSun.style.left = 385 + 'px';
  eSun.style.top = 175 + 'px';
}

function moveImage(e) {
    //console.debug(e);
    let eSun = document.getElementById('imgSun'); 
    switch(e.innerText) {
     case '▲':
        let sunTop = parseInt(eSun.style.top);
        eSun.style.top = sunTop - moveChange + 'px';
     break;
     case '▼':
        let sunBottom = parseInt(eSun.style.top);
        eSun.style.top = sunBottom - moveChangeBottom + 'px';
     break;
     case '⯇':
      let sunLeft = parseInt(eSun.style.left);
      eSun.style.left = sunLeft - moveChangeLeft + 'px';
     break;
     case '⯈':
      let sunRight = parseInt(eSun.style.left);
      eSun.style.left = sunRight - moveChangeRight + 'px';
     break;
     case '■':
        centerSun();
     break;
}
}

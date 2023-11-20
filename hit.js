
const card_boxes = document.querySelectorAll('.card_box'),
modal = document.querySelector('.modal'),
startBtn = document.getElementById('start');


var overAud = new Audio("./assets/audio/over.mp3");
var outAud = new Audio("./assets/audio/out.mp3");

let hovered =  false;

startBtn.onclick = ()=> {
    modal.classList.add('hide');
    card_boxes.forEach((box)=> {
        box.addEventListener('pointerover', ()=> {
            if (!hovered) playAudio(overAud);
            hovered = true;
        });
        box.addEventListener('pointerleave', ()=> {
            hovered = false;
            playAudio(outAud);
        });


        for (i = 1; i <= 100; i++) {
            box.children[2].innerHTML += `<div class="circle-container">
            <div class="circle"></div>
        </div>`;
        }
    });
}


function playAudio(aud) {
    aud.volume = '0.4';
    aud.play();
}
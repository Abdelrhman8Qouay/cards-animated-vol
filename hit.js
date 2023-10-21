
const card_boxes = document.querySelectorAll('.card_box');
var overAud = new Audio("./assets/audio/over.mp3");
var outAud = new Audio("./assets/audio/out.mp3");


let hovered =  false;
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

function playAudio(aud) {
    aud.play();
}
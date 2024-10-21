let btns = document.querySelectorAll(".btn");
let currentAudio = null;

btns.forEach(t => {
    let soundId = t.getAttribute("data-sound");
    let audio = document.getElementById(soundId);
    
    t.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        currentAudio = audio;
        currentAudio.play();
    });
});

let stop = document.querySelector(".stop");

stop.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});
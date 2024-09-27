//your JS code here. If required.

let btns = document.querySelectorAll(".btn");
let currentAudio = null;
btns.forEach(t => {
    // console.log(t.innerHTML);
    let audio = document.createElement("audio");
    audio.src = `sounds/${t.innerHTML}.mp3`;
    // console.log(audio);
    
    t.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        currentAudio = audio
        currentAudio.play();
    })
    
});

let stop = document.querySelector(".stop");

stop.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
})
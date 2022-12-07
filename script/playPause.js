const audio = document.querySelector('audio');
const playArrow = document.querySelector("#playArrow")
const pauseBars = document.getElementById("pauseBars");

playPause = () => {
    if (audio.paused) {
        audio.play()
        playArrow.style.display = "none"
        pauseBars.style.display = "block"
    } else {
        audio.pause()
        playArrow.style.display = "block"
        pauseBars.style.display = "none"
    }
}

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 32) {
        playPause()
    }
});

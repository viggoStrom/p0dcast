
const audio = document.querySelector("audio");
const playButton = document.getElementsByClassName("playButton")[0]
const playArrow = document.getElementsByClassName("playArrow")[0]
const pauseBars = document.getElementsByClassName("pauseBars")[0]

playButton.setAttribute("id", "")
playArrow.setAttribute("id", "")
pauseBars.setAttribute("id", "")

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

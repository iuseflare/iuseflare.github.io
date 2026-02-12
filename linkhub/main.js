const nondrags = document.querySelectorAll('img, a')

nondrags.forEach(nondrag => {
    nondrag.ondragstart = function() { return false }
});

// -----------------------------------------------

const enter = document.querySelector('.enter')
const bg = document.querySelector('.bg')
const card = document.querySelector('.card')
const profile = document.querySelector('.profile')
const links = document.querySelector('.links')
const player = document.querySelector('.player')
const playerContent = document.querySelector('.playerContent')
const pausePlay = document.querySelector('.pausePlay')

const song = document.querySelector('.song')
let playing = true
song.volume = 0.4

function enterAnim() {
    song.play()
    bg.play()
    enter.style.opacity = 0

    card.style.opacity = 1
    card.style.transform = "scale(1)"

    setTimeout(function(){
        enter.style.display = "none"

        profile.style.transform = "scale(1)"
        profile.style.opacity = 1
    }, 500);

    setTimeout(function(){
        links.style.transform = "scale(1)"
        links.style.opacity = 1
    }, 1000);

    setTimeout(function(){
        player.style.transform = "scale(1)"
        player.style.opacity = 1
    }, 1500);
    setTimeout(function(){
        playerContent.style.transform = "scale(1)"
        playerContent.style.opacity = 1
    }, 2000);
}

function pausePlayFunc() {
    if (playing) {
        song.pause()
        console.log("stop")
        playing = false
        pausePlay.classList.add("bx-play")
        pausePlay.classList.remove("bx-pause")
    } else {
        song.play()
        console.log("start")
        playing = true
        pausePlay.classList.remove("bx-play")
        pausePlay.classList.add("bx-pause")
    }
}

enter.addEventListener("click", enterAnim)


pausePlay.addEventListener("click", pausePlayFunc)

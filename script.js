let homePoints = document.getElementById("home")
let guestPoints = document.getElementById("guest")
let homeSum = 0
let guestSum = 0

let time = document.getElementById("time")
let seconds = 0
let minutes = 0

function startTimer() {
    timer = setInterval(() => {
        seconds++
        if (seconds == 60) {
            minutes += 1
            seconds = 0
        }
        time.textContent = minutes + ':' + seconds
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer)
}

function resumeTimer() {
    startTimer()
}

function resetTimer() {
    clearInterval(timer)
    time.textContent= '00:00'
    seconds = 0, minutes = 0
}

resetColors()


function h1() {
    homeSum += 1
    homePoints.textContent = homeSum
    changeColors()

}

function h2() {
    homeSum += 2
    homePoints.textContent = homeSum
    changeColors()

}

function h3() {
    homeSum += 3
    homePoints.textContent = homeSum
    changeColors()

}



function g1() {
    guestSum += 1
    guestPoints.textContent = guestSum
    changeColors()

}

function g2() {
    guestSum += 2
    guestPoints.textContent = guestSum
    changeColors()

}

function g3() {
    guestSum += 3
    guestPoints.textContent = guestSum
    changeColors()

}

function newGame() {
    homePoints.textContent = 0
    guestPoints.textContent = 0

    guestSum = 0
    homeSum = 0
    reset()

}

function changeColors() {
    if (homeSum > guestSum) {
        homePoints.style.color = "#45FF45"
        guestPoints.style.color = "#F94F6D"
    }
    else if (homeSum < guestSum) {
        guestPoints.style.color = "#45FF45"
        homePoints.style.color = "#F94F6D"
    }
    else if (homeSum == guestSum) {
        homePoints.style.color = "#F94F6D"
        guestPoints.style.color = "#F94F6D"
    }
}

function reset() {
    homePoints.style.color = "#F94F6D"
    guestPoints.style.color = "#F94F6D"
    resetTimer()
}
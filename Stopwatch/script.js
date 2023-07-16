let stopBtn = document.getElementById('stopBtn')
let startBtn = document.getElementById('startBtn')
let resetBtn = document.getElementById('resetBtn')
let timerDisplay = document.querySelector('.timerDisplay')

let msec = 00
let secs = 00
let mins = 00

let timerId = null
startBtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId)
    }
    timerId = setInterval(
        stertTimer
    , 10);
})
stopBtn.addEventListener('click', function () {
    clearInterval(timerId)

})
resetBtn.addEventListener('click', function () {
    clearInterval(timerId)
    timerDisplay.innerHTML = `00 : 00 : 00`
    msec=secs=mins=00
})

function stertTimer() {
    msec++
    if (msec == 100) {
        msec = 0
        secs++
        if (secs == 60) {
            secs = 0
            mins++
        }
    }
    let msecString = msec < 10 ? `0${msec}` : msec
    let secString = secs < 10 ? `0${secs}` : secs
    let minstring = mins < 10 ? `0${mins}` : mins

    timerDisplay.innerHTML = `${minstring} : ${secString} : ${msecString}`


}

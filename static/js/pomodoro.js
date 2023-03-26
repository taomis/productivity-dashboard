const el = document.querySelector('div[target]');
const startstop_btn = document.getElementById('stst-btn');
const work_btn = document.getElementById('work-btn');
const rest_btn = document.getElementById('rest-btn');
const resetBtn = document.getElementById('reset_btn');

let timeRemaining = 0;
let stat = false; // false=paused, true=unpaused
let interval = null;

startstop_btn.addEventListener('click', startstop);
work_btn.addEventListener("click", work);
rest_btn.addEventListener("click", rest);
resetBtn.addEventListener("click", reset);

function timer () {
    timeRemaining--;

    let mins = Math.floor(timeRemaining / 60);
	let secs = timeRemaining % 60;

    if (secs < 10) secs = '0' + secs;
	if (mins < 10) mins = '0' + mins;

    el.innerText = `${mins}:${secs}`;
}

function work () {
    if (interval) {return}

    timeRemaining = 1500;
    interval = setInterval(timer, 1000);
    stat = true;
}

function rest () {
    if (interval) {return}

    timeRemaining = 300;
    interval = setInterval(timer, 1000);
    stat = true;
}

function startstop () {
    if (stat === true) {
        clearInterval(interval);
        interval = null;
        stat = false;
    } else {
        if (interval) {return}
        interval = setInterval(timer, 1000);
        stat = true;
    }
}

function reset () {
    clearInterval(interval);
    interval = null;
    stat = false;
    el.innerText = '00:00';
    timeRemaining = 0;
}
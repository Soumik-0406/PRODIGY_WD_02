let timer;
let isRunning = false;
let lapCount = 1;

function startPause() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        document.querySelector("#controls button:first-child").innerText = "Play";
    } else {
        timer = setInterval(updateStopwatch, 1000);
        isRunning = true;
        document.querySelector("#controls button:first-child").innerText = "Pause";
    }
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    document.querySelector("#controls button:first-child").innerText = "Play";
    lapCount = 1;
    document.getElementById("stopwatch").innerText = "00:00:00";
    document.getElementById("lapTimes").innerText = "";
}

function lap() {
    if (isRunning) {
        const lapTime = document.getElementById("stopwatch").innerText;
        const lapItem = document.createElement("div");
        lapItem.innerText = `Lap ${lapCount}: ${lapTime}`;
        document.getElementById("lapTimes").prepend(lapItem);
        lapCount++;
    }
}

function updateStopwatch() {
    const stopwatchElement = document.getElementById("stopwatch");
    const time = stopwatchElement.innerText.split(":");
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let seconds = parseInt(time[2]);

    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    stopwatchElement.innerText = formattedTime;
}

function padZero(number) {
    return number < 10 ? `0${number}` : `${number}`;
}
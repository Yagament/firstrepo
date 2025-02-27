const storeOpening = new Date('February 25, 2025 00:00:00');

setCountdown(storeOpening);

setInterval(function() {
    setCountdown(storeOpening);
},1000)

function setCountdown(countingDownTime) {
    let now = new Date();

    let timeRemaining = countingDownTime - now;

    console.log(timeRemaining);


//Seconds
let seconds = Math.floor(timeRemaining / 1000);

//minutes
let minutes = Math.floor(timeRemaining / (1000*60));

//hours
let hours = Math.floor(timeRemaining / (1000*60*60));

//days
let days = Math.floor(timeRemaining / (1000*60*60*24));

console.log(days, hours, minutes, seconds);


let daysToDisplay = days;

let hoursToDisplay = (hours - (days * 24));

let minutesToDisplay = (minutes - (hours * 60));

let secondsToDisplay = (seconds - (minutes * 60));

console.log(daysToDisplay, hoursToDisplay, minutesToDisplay, secondsToDisplay);

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

daysEl.textContent = daysToDisplay;
hoursEl.textContent = hoursToDisplay;
minutesEl.textContent = minutesToDisplay;
secondsEl.textContent = secondsToDisplay;

// const countdownString = `${daysToDisplay}:${hoursToDisplay}:${minutesToDisplay}:${secondsToDisplay}`;
//     document.getElementById('days').textContent = countdownString;


}

let ids = ["days", "hours", "minutes", "seconds"];

ids.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.style.fontSize = "48px";
        element.style.backgroundColor = 'rgba(23, 2, 80, 1)'
        element.style.padding = "24px 16px"
        element.style.margin = "8px 16px"
        element.style.borderRadius = "8px" 
       }
});

const timeInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;

circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const game = new Timer(timeInput, startButton, pauseButton, {
    onStart(totalDuration){
        duration = totalDuration;
    },
    
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset', (perimeter * timeRemaining) / duration - perimeter);

    },

    onPause(){
        console.log("The time has been paused");

    }
});
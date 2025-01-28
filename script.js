const doorCallButton = document.getElementById('doorCallButton')
const doorDiv = document.getElementById('door')
const soundDingElevator = new Audio('sounds/elevatorDing.mp3')
const soundRunningElevator = new Audio('sounds/elevator.mp3')
const controlPanel = document.getElementById('controlPanel')


controlPanel.style.display = 'none';

doorCallButton.addEventListener('click', () => {
    if(controlPanel.style.display == "none"){
        controlPanel.style.display = "flex"
    }
    else{
        controlPanel.style.display = "none";
    }

    doorCallButton.style.display ="none";
})

const queue = [];
let isRunning = false;

function runElevator(floorNumber){
   
}

function elevatorSound(){
    soundRunningElevator.currentTime = 0
    soundRunningElevator.play();
    setTimeout(() => {
        soundRunningElevator.pause();
    },5000)
}

function elevatorDing(){
    soundDingElevator.currentTime = 0
    setTimeout(()=>{
        soundDingElevator.play();
    },5050)
}

function movingFloor(floorNumber){
    if(floorNumber == 1){
        doorDiv.style.marginBottom = "0%"
    }
    else if(floorNumber == 2){
        doorDiv.style.marginBottom = "25%"
    }
    else if(floorNumber == 3){
        doorDiv.style.marginBottom = "50%"
    }
    else{
    }
}


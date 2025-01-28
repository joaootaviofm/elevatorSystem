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
var isRunning = false

function runElevator(floorNumber){
    queue.push(floorNumber)
    if(isRunning == false){
        playQueue()
    }
}

function playQueue(){
    if(queue.length == 0){
        isRunning = false;
    }
    else{
        isRunning = true;
        const nextFloor = queue.shift()
        movingToFloor(nextFloor)
    }
}


function elevatorSound(){
    soundRunningElevator.currentTime = 0
    soundRunningElevator.play();
    setTimeout(() => {
        soundRunningElevator.pause();
    },5000)
}

function elevatorDing(){
    setTimeout(()=>{
        soundDingElevator.play();
    },5050)
}

function movingToFloor(floorNumber){
    if(floorNumber == 1){
        doorDiv.style.marginBottom = "0%"
        elevatorSound()
        elevatorDing()
    }
    else if(floorNumber == 2){
        doorDiv.style.marginBottom = "25%"
        elevatorSound()
        elevatorDing()
    }
    else if(floorNumber == 3){
        doorDiv.style.marginBottom = "50%"
        elevatorSound()
        elevatorDing()
    }
    else{
        doorDiv.style.marginBottom = "75%";
        elevatorSound()
        elevatorDing()
    }
}


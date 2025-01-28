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
        setTimeout(() => {
            doorDiv.innerHTML = "Voltando ao 1 andar"
            doorDiv.style.marginBottom = "0%"
            elevatorSound()
            elevatorDing()
            setTimeout(() => {
                doorDiv.innerHTML = "Esperando chamado..."
            },2000)
        },6000)
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

function doorMessage(floorNumber){
    doorDiv.innerHTML = `A caminho do ${floorNumber} andar`
}

function arriveMessage(floorNumber){
    setTimeout(()=>{
        doorDiv.innerHTML = `Voce chegou no ${floorNumber} andar`
    },5000)
}

function movingToFloor(floorNumber){
    if(floorNumber == 1){
        doorDiv.style.marginBottom = "0%"
        elevatorSound()
        elevatorDing()
        doorMessage(floorNumber)
        arriveMessage(floorNumber)
    }
    else if(floorNumber == 2){
        doorDiv.style.marginBottom = "25%"
        elevatorSound()
        elevatorDing()
        doorMessage(floorNumber)
        arriveMessage(floorNumber)
    }
    else if(floorNumber == 3){
        doorDiv.style.marginBottom = "50%"
        elevatorSound()
        elevatorDing()
        doorMessage(floorNumber)
        arriveMessage(floorNumber)
    }
    else{
        doorDiv.style.marginBottom = "75%";
        elevatorSound()
        elevatorDing()
        doorMessage(floorNumber)
        arriveMessage(floorNumber)
    }
    setTimeout(() => {
        playQueue()
    },5500)
}
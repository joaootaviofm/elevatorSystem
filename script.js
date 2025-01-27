const doorCallButton = document.getElementById('doorCallButton')
const doorDiv = document.getElementById('door')
const controlPanel = document.getElementById('controlPanel')
const buttonFirstFloor = document.getElementById('toFirstButton')
const buttonSecondFloor = document.getElementById('toSecondButton')
const buttonThirdFloor = document.getElementById('toThirdButton')
const buttonFourthFloor = document.getElementById('toFourthButton')

const dingElevator = new Audio('sounds/elevatorDing.mp3')
const runElevator = new Audio('sounds/elevator.mp3')

controlPanel.style.display = 'none';

doorCallButton.addEventListener('click', () => {
    if(controlPanel.style.display == "none"){
        controlPanel.style.display = "flex"
    }
    else{
        controlPanel.style.display = "none";
    }

    let currentFloor = 0;
    doorCallButton.style.display ="none";
})

buttonFirstFloor.addEventListener('click', () => {
    doorDiv.style.marginBottom = "0%";
    currentFloor = 1;
    doorDiv.innerHTML = "A caminho do primeiro andar"
    runElevator.play()
    setTimeout(() => {
        runElevator.pause();
    },5000)
    setTimeout(() => {
        doorDiv.innerHTML = "Primeiro andar"
        dingElevator.play()
    },5000)
})

buttonSecondFloor.addEventListener('click', () => {
    doorDiv.style.marginBottom = "25%"
    doorDiv.innerHTML = "A caminho do segundo andar..."
    currentFloor = 2;
    runElevator.play()
    setTimeout(() => {
        runElevator.pause();
    },5000)
    setTimeout(() => {
        doorDiv.innerHTML = "Segundo andar"
        dingElevator.play()
    },5000)

})

buttonThirdFloor.addEventListener('click', () => {
    doorDiv.style.marginBottom = "50%";
    currentFloor = 3;
    doorDiv.innerHTML = "A caminho do terceiro andar..."  
    runElevator.play()
    setTimeout(() => {
        runElevator.pause();
    },5000)
    setTimeout(() => {
        doorDiv.innerHTML = "Terceiro andar"
        dingElevator.play()
    },5000)

})

buttonFourthFloor.addEventListener('click', () => {
    doorDiv.style.marginBottom = "75%";
    currentFloor = 4;
    doorDiv.innerHTML = "A caminho do quarto andar"
    runElevator.play()
    setTimeout(() => {
        runElevator.pause();
    },5000)
    setTimeout(() => {
        doorDiv.innerHTML = "Quarto andar"
        dingElevator.play()
    },5000)
})




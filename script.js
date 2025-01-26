const doorCallButton = document.getElementById('doorCallButton')
const doorDiv = document.getElementById('door')
const controlPanel = document.getElementById('controlPanel')
const buttonFirstFloor = document.getElementById('toFirstButton')
const buttonSecondFloor = document.getElementById('toSecondButton')
const buttonThirdFloor = document.getElementById('toThirdButton')
const buttonFourthFloor = document.getElementById('toFourthButton')

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

buttonFirstFloor.addEventListener('click', () => {
    doorDiv.style.marginBottom = "0%";
})

buttonSecondFloor.addEventListener('click', () => {
    doorDiv.style.marginBottom = "25%"
})

buttonThirdFloor.addEventListener('click', () => {
    doorDiv.style.marginBottom = "50%";
})

buttonFourthFloor.addEventListener('click', () => {
    doorDiv.style.marginBottom = "75%";
})




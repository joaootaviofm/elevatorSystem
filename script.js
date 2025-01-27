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
    let currentFloor = 0
    doorCallButton.style.display ="none";
})

buttonFirstFloor.addEventListener('click', () => {
    doorDiv.style.marginBottom = "0%";
    currentFloor = 1;
    doorDiv.innerHTML = "A caminho do primeiro andar"
    setTimeout(() => {
        doorDiv.innerHTML = "Primeiro andar"
    },3000)
})

buttonSecondFloor.addEventListener('click', () => {
    doorDiv.style.marginBottom = "25%"
    currentFloor = 2;
    doorDiv.innerHTML = "A caminho do segundo andar..."
    setTimeout(() => {
        doorDiv.innerHTML = "Segundo andar"
    },3000)

})

buttonThirdFloor.addEventListener('click', () => {
    doorDiv.style.marginBottom = "50%";
    currentFloor = 3;
    doorDiv.innerHTML = "A caminho do terceiro andar..."  
    setTimeout(() => {
        doorDiv.innerHTML = "Terceiro andar"
    },3000)

})

buttonFourthFloor.addEventListener('click', () => {
    doorDiv.style.marginBottom = "75%";
    currentFloor = 4;
    doorDiv.innerHTML = "A caminho do quarto andar"
    setTimeout(() => {
        doorDiv.innerHTML = "Quarto andar"
    },3000)
})




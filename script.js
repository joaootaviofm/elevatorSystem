const doorCallButton = document.getElementById('doorCallButton')
const doorDiv = document.getElementById('door')


doorCallButton.addEventListener('click', () => {
    doorDiv.innerHTML = ""
})




// 00 = terreo
// 150 px = first floor
// 300 px = second floor
// 450px = third floor
// 600px = 4th floor 
// 750px = cobertura

// elevator transition timing
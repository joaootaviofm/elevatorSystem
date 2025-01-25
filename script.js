var firstDoor = document.getElementById('entrance1')
var secondDoor = document.getElementById('entrance2')
var thirdDoor = document.getElementById('entrance3')
var toFirstFloor = document.getElementById('andar')


toFirstFloor.addEventListener('click', () => {
    firstDoor.style.marginBottom = "150px"
})



// 150 px = first floor
// 300 px = second floor
// 450px = third floor
// 600px = 4th floor 
// 750px = last floor
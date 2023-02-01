const container = document.querySelector("#container")
const squareSize = (500/16)
function makeGrid() {
    for (i = 0; i < 256; i++) {
        const squares = document.createElement('div')
        squares.style.width = squareSize.toString() + "px"
        squares.style.height = squareSize.toString() + "px"
        container.appendChild(squares)
    }
}
makeGrid()
const squares = container.querySelectorAll('div')
squares.forEach((square) => square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'black'
}))
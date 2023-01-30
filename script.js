const container = document.querySelector("#container")
const squareSize = (500/16)
function makeGrid() {
    for (i = 0; i < 256; i++) {
        square = document.createElement('div')
        square.style.width = squareSize.toString() + "px"
        square.style.height = squareSize.toString() + "px"
        container.appendChild(square)
    }
}
makeGrid()
let squareCount = 16
let squareTotal = squareCount * squareCount
const container = document.querySelector("#container")
let squareSize = (500/squareCount)
const sizeButton = document.querySelector(".sizeButton")
const sizeMenu = document.querySelector(".sizeMenu")
const sizeOptions = sizeMenu.querySelectorAll('button')
function makeGrid() {
    for (i = 0; i < squareTotal; i++) {
        const squares = document.createElement('div')
        squares.style.width = squareSize.toString() + "px"
        squares.style.height = squareSize.toString() + "px"
        squares.style.border = 'solid 1px'
        squares.style.boxSizing = 'border-box'
        container.appendChild(squares)
    }
}
function eraseGrid() {
    let squares = container.lastElementChild
    for (i = 0; i < squareTotal; i++){
        container.removeChild(squares)
        squares = container.lastElementChild
    }
}
function changeGrid(e) {
    if (e.target !== sizeOptions[4]) {
        eraseGrid()
        squareCount = this.textContent.split('x', 1)
        squareTotal = squareCount * squareCount
        squareSize = (500/squareCount)
        makeGrid()
        colorSquare()
    } else {
        let ask = prompt("Please specify a size up to 100")
        if (parseInt(ask) > 100 || parseInt(ask) < 1) {
            alert("Invalid")
        } else if (parseInt(ask) <= 100 && parseInt(ask) >= 1) {
            eraseGrid()
            squareCount = ask
            squareTotal = squareCount * squareCount
            squareSize = (500/squareCount)
            makeGrid()
            colorSquare()
        } else {
            alert('Invalid')
        }
    }
}
function colorSquare() {
    const squares = container.querySelectorAll('div')
    squares.forEach((square) => square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black'
    }))
}
makeGrid()
colorSquare()
sizeButton.addEventListener('click', () => {
    sizeMenu.style.display = 'flex'
})
window.addEventListener('mouseover', (event) => {
    if (event.target != sizeMenu && event.target.parentNode != sizeMenu) {
        sizeMenu.style.display = 'none'
    }
})
sizeOptions.forEach((option) => option.addEventListener('click', changeGrid))
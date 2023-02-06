let squareCount = 16
let squareTotal = squareCount * squareCount
const container = document.querySelector("#container")
let squareSize = (500/squareCount)
const menuButton = document.querySelectorAll(".button")
const sizeMenu = document.querySelector(".sizeMenu")
const colorMenu = document.querySelector(".colorMenu")
const sizeOptions = sizeMenu.querySelectorAll('button')
const colorOptions = colorMenu.querySelectorAll('button')
let black = true
let rainbow = false
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
        while (true) {
            let ask = prompt("Please specify a size up to 100")
            if (parseInt(ask) <= 100 && parseInt(ask) >= 1) {
                eraseGrid()
                squareCount = ask
                squareTotal = squareCount * squareCount
                squareSize = (500/squareCount)
                makeGrid()
                colorSquare()
                break
            }
        }
        }
}
function colorSquare() {
    const squares = container.querySelectorAll('div')
    squares.forEach((square) => square.addEventListener('mouseover', () => {
        let valOne = Math.random()
        let valTwo = Math.random()
        let valThree = Math.random()
        if (rainbow) {
            square.style.backgroundColor = `rgb(${Math.floor(valOne*300)},${Math.floor(valTwo*300)},${Math.floor(valThree*300)})`
        } else if (black) {
            square.style.backgroundColor = 'black'
        }
        
    }))
}
makeGrid()
colorSquare()
menuButton.forEach((button) => button.addEventListener('click', (e) => {
    if (e.target.textContent === "Size" ) {
        sizeMenu.style.display = 'flex'
    }else if (e.target.textContent === "Color") {
        colorMenu.style.display = 'flex'
    }
}))
window.addEventListener('mouseover', (event) => {
    if (event.target != sizeMenu && event.target.parentNode != sizeMenu) {
        sizeMenu.style.display = 'none'
    }
    if (event.target != colorMenu && event.target.parentNode != colorMenu) {
        colorMenu.style.display = 'none'
    }
})
sizeOptions.forEach((option) => option.addEventListener('click', changeGrid))
colorOptions.forEach((option) => option.addEventListener('click', (e) => {
    if (e.target.textContent === 'Black') {
        black = true
        rainbow = false
        colorSquare()
    } else if (e.target.textContent === 'Rainbow') {
        black = false
        rainbow = true
        colorSquare()
    }
    console.log(e.target)
}))
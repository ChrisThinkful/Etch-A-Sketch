const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = 'black';

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

function setColor(newColor){
    currentColor = newColor;
    // reloadGrid();
}

function setSize(newSize){
    currentSize = newSize;
    reloadGrid();
}

const grid = document.getElementById('grid');
const resetBtn = document.getElementById('reset__btn');
const redBtn = document.getElementById('colorRed__btn');
const blueBtn = document.getElementById('colorBlue__btn');
const blackBtn = document.getElementById('colorBlack__btn');
const smallBtn = document.getElementById('size16__btn')
const mediumBtn = document.getElementById('size32__btn')
const largeBtn = document.getElementById('size64__btn')

resetBtn.onclick = () => reloadGrid();
redBtn.onclick = () => setColor('red');
blueBtn.onclick = () => setColor('blue');
blackBtn.onclick = () => setColor('black');
smallBtn.onclick = () => setSize(16);
mediumBtn.onclick = () => setSize(32);
largeBtn.onclick = () => setSize(64);


function setupGrid(currentSize){
    grid.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`

    for (i = 0; i < currentSize * currentSize; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.addEventListener('mouseover', etch);
        grid.appendChild(gridDiv);
    }
}


function etch(e){
    e.target.style.backgroundColor = currentColor;
}


function reloadGrid(){
    grid.innerHTML = '';
    setupGrid(currentSize);
    setColor(currentColor);
}

window.onload = () => {
    setupGrid(DEFAULT_SIZE)
    setColor(DEFAULT_COLOR)
}
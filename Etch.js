let grid = ''
let size = '16'

for (i = 1; i <= size*size; i++) {
    grid+= `<div class="grid">${i}</div>`
};

const gridSquare = document.querySelectorAll('.grid')
    gridSquare.forEach(square => {
        square.addEventListener('mouseover',function(e){
            
        }
    )})

const container = document.getElementById('container');
container.innerHTML = grid;
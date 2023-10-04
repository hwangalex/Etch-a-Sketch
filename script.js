const gridContainer = document.getElementById('gridContainer');
//const squareDiv = document.querySelector('gridSquare');

function createGrid(width, height) {
    for (i = 0; i < width; i++) {
        for (j = 0; j < height; j++) {
            const square = document.createElement('div');
            square.classList.add('gridSquare');
            gridContainer.appendChild(square);
    
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = 'blue';
            });
    
            square.addEventListener('mouseleave', () => {
                square.style.backgroundColor = 'white';
            });
    
        }
    }
}


createGrid(16,16);

//button -> user clicks the button and a pop up will show up to let the user choose a color
//          and so the set color will be that color and wheneve you hover over a square, it
//          makes it that color
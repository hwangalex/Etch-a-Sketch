const gridContainer = document.getElementById("gridContainer");

function createGrid(width, height) {
    for (i = 0; i < width; i++) {
        for (j = 0; j < height; j++) {
            const square = document.createElement('div');
            square.classList.add('gridSquare');
            gridContainer.appendChild(square);
        }
    }
}

createGrid(16, 16);
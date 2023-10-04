const gridContainer = document.getElementById('gridContainer');
const sizeButton = document.getElementById('dimensions');

// Creates a grid based on the length
function createGrid(length) {
    gridContainer.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${length}, 1fr)`;

    for (i = 0; i < length; i++) {
        for (j = 0; j < length; j++) {
            const square = document.createElement('div');
            square.classList.add('gridSquare');
            gridContainer.appendChild(square);
    
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = 'blue';
            });
        }
    }
}

// When user clicks the button, the user can choose the size of the grid
sizeButton.addEventListener('click', () => {
    let size = prompt("Enter a number from 1 - 100.");

    if ((Number(size) < 1) || (Number(size) > 100)) {
        size = prompt("Invalid input. Enter a number from 1 - 100.")
    } else {
        const squareDiv = gridContainer.querySelectorAll('.gridSquare')
        squareDiv.forEach(child => {
            child.remove();
        });
        createGrid(size);
    }
});

createGrid(16);
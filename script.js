// Grab the main box and all the buttons from the HTML file
const container = document.querySelector('#container');
const resetBtn = document.querySelector('#reset-btn');
const rainbowBtn = document.querySelector('#rainbow-btn');
const clearBtn = document.querySelector('#clear-btn');

// Keep track of our ink mode
let currentMode = 'black'; 

// This function creates a random color string
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to build the grid squares
function createGrid(size) {
    container.innerHTML = ''; 
    const squareSize = 600 / size;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        container.appendChild(div);
    }
}

//listener on the container to handle ALL squares
container.addEventListener('mouseover', (event) => {
    // Check if what the mouse touched is actually a square
    if (event.target.classList.contains('square')) {
        // Change the color based on the mode
        if (currentMode === 'rainbow') {
            event.target.style.backgroundColor = getRandomColor();
        } else {
            event.target.style.backgroundColor = 'black';
        }
    }
});

// Resize grid
resetBtn.addEventListener('click', () => {
    let newSize = parseInt(prompt("Enter grid size (1-100):"));
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

// Rainbow mode button
rainbowBtn.addEventListener('click', () => {
    currentMode = 'rainbow';
});

// Clear canvas button
clearBtn.addEventListener('click', () => {
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach(square => square.style.backgroundColor = 'white');
});

// Start with 16x16
createGrid(16);

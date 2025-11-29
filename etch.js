const container = document.getElementById('container');
let gridSize = 16;

function initializeSketch() {

    for (let index = 0; index < gridSize; index++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }

}

initializeSketch(); // This runs as soon as the script loads
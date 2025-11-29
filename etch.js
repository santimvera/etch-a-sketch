const container = document.getElementById('container');
let gridSize = 16;

function initializeSketch() {
    for (let rows = 0; rows < gridSize; rows++) {
        aRow = document.createElement("div");
        aRow.classList.add("row");
        for (let column = 0; column < gridSize; column++) {
            const square = document.createElement("div");
            square.classList.add("square");
            aRow.appendChild(square);
        }
        container.appendChild(aRow);
    }
}

initializeSketch(); // This runs as soon as the script loads
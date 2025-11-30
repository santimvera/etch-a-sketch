const container = document.getElementById('container');
document.getElementById("newSizeButton").onclick = changeGridSize;
let gridSize = 16;

function initializeSketch() {
    for (let rows = 0; rows < gridSize; rows++) {
        aRow = document.createElement("div");
        aRow.classList.add("row");
        for (let column = 0; column < gridSize; column++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", function () {
                square.classList.add("hovered");
            });
            aRow.appendChild(square);
        }
        container.appendChild(aRow);
    }
}

function clearSketch() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};

function changeGridSize(callback) {
    let size = prompt('Enter new size', "5");

    if (size != null) {
        gridSize = parseInt(size, 10);
        clearSketch();
        initializeSketch();
    }



};



initializeSketch(); // This runs as soon as the script loads
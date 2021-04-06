const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");

window.addEventListener("load", setDefaultGrid);
resetButton.addEventListener("click", changeSize);

function setDefaultGrid() {
    setGridSize(16);
    fillGrid(16);
}

function setGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList = "grid-element"; //this refers to creating a new class name
        gridElement.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(gridElement);
    }
}

function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256); //Math.floor rounds number
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function changeSize() {
    let newSize = prompt("Enter new size");

    if (newSize != null) {
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
            alert ("Enter a number from 1 to 64");
            changeSize();
        } else {
            clearGrid();
            setGridSize(newSize);
            fillGrid(newSize);
        }
    }
}

function clearGrid() {
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
        gridContainer.removeChild(element);
    });
}
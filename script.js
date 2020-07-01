const X_CLASS = "x";
const CIRCLE_CLASS = "circle";

const cellElements = document.querySelectorAll("[data-cell]");

let circleTurn;

cellElements.forEach(cell => {
    // only fire click event ONCE
    cell.addEventListener('click', handleClick, {once: true})
});

function handleClick(e) {
    // get cell that was clicked on
    const cell = e.target;

    // determine whether to apply circle class or x class
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;

    // place mark
    placeMark(cell, currentClass)
    // check for win
    // check for draw
    // switch turns
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

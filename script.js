const X_CLASS = "x";
const CIRCLE_CLASS = "circle";

const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");


let circleTurn;

startGame();

function startGame() {
    circleTurn = false;
    cellElements.forEach(cell => {
        // only fire click event ONCE
        cell.addEventListener('click', handleClick, {once: true})
    });
    setBoardHoverClass();
}

function handleClick(e) {
    // get cell that was clicked on
    const cell = e.target;

    // determine whether to apply circle class or x class
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;

    // place mark
    placeMark(cell, currentClass);
    // check for win
    // check for draw
    // switch turns
    swapTurns();
    setBoardHoverClass();
}

// function to place X or O in a cell
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

// function to change the turn
function swapTurns() {
    circleTurn = !circleTurn;
}

// function to add hover to whoever's turn
// gray X and O show up
function setBoardHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
}
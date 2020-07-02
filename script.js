const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winningMessageTextElement = document.querySelector("[data-winning-message-text]");
const winningMessageElement = document.getElementById("winningMessage");
const restartButton = document.getElementById("restartButton");


let circleTurn;

// FUNCTION TO START THE GAME
startGame();

// function to restart game 
restartButton.addEventListener('click', startGame);

function startGame() {
    circleTurn = false;
    cellElements.forEach(cell => {
        // remove X and O classes
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        // remove event listener
        cell.removeEventListener('click', handleClick)
        // only fire click event ONCE
        cell.addEventListener('click', handleClick, {once: true});
        
    });
    setBoardHoverClass();

    // remove the winning message (if any)
    winningMessageElement.classList.remove('show');
}

function handleClick(e) {
    // get cell that was clicked on
    const cell = e.target;

    // determine whether to apply circle class or x class
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;

    // place mark
    placeMark(cell, currentClass);
    // check for win
     if (checkWin(currentClass)) {
        endGame(false);
     } else if (isDraw()) {
         // check for draw
         endGame(true);
     } else {
        // switch turns
        swapTurns();
        setBoardHoverClass();
     }
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

// function to check for a win
function checkWin(currentClass) {

    // check if ANY winning combination met =>
        // for a given combination, do all cells in that combination have the same class?
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        })
    })
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS);
    })
}

// function to end game
function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = "Draw!";
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Win!`;
    }
    winningMessageElement.classList.add('show');
}
const cellElements = document.querySelectorAll("[data-cell]");

cellElements.forEach(cell => {
    // only fire click event ONCE
    cell.addEventListener('click', handleClick, {once: true})
});

function handleClick(e) {
    // place mark
    // check for win
    // check for draw
    // switch turns
}

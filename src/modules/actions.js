let activePlayer = 'X';

const isValidMove = (cell) => cell.innerText ? false : true;

const playerAction = (cell, i) => {
  if (isValidMove(cell)) {
    cell.innerText = activePlayer;
    activePlayer = activePlayer === 'X' ? 'O' : 'X';
  }
};

export { activePlayer, isValidMove, playerAction };

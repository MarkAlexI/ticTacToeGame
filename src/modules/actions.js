import eventBus from '@/bus';

let activePlayer = 'X';

const isValidMove = (cell) => cell.innerText ? false : true;

const changeActivePlayer = () => activePlayer = activePlayer === 'X' ? 'O' : 'X';

const playerAction = (cell, i) => {
  if (isValidMove(cell)) {
    cell.innerText = activePlayer;
    eventBus.post('move', [activePlayer, i]);
    changeActivePlayer();
  }
};

const makeMove = (cell, i) => {
  playerAction(cell, i);
};

export { makeMove };

import eventBus from '@/bus';

const html = document.getElementsByTagName('html')[0];
const size = html.style.fontSize;

let activePlayer = 'X';

const player = document.getElementById('player');
const status = document.getElementById('status');

const nextPlayer = (prevPlayer) => {
  status.classList.toggle('next');
  player.classList.add('X', 'O');
  player.classList.remove(prevPlayer);
  player.innerText = prevPlayer === 'X' ? 'O' : 'X';
};

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

const reSize = (num) => {
  html.style.fontSize = `${16 * num}px`;
};

const shrink = () => reSize(.75);

const grow = () => reSize(1.25);

export { nextPlayer, makeMove, shrink, grow };

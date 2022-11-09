import './css/style.scss';
import eventBus from '@/bus';
import { startNewGame } from '@/reset';
import { X_WON, O_WON, TIE, winConditions, gameBoard, moveControllers } from '@/constants';
import { makeMove } from '@/actions';

document.addEventListener('DOMContentLoaded', () => {
  const player = document.getElementById('player');
  const status = document.getElementById('status');
  
  const isGameOver = () => {
    return winConditions.some((el) =>
        el.reduce((sum, curr) => sum &&
          gameBoard[curr] === gameBoard[el[0]],
          gameBoard[el[0]] !== ''));
  };
  
  const stopGame = () => {
    cells.forEach((cell, i) => cell.removeEventListener('click', moveControllers[i]));
  };
  
  eventBus.subscribe('move', ([message, i]) => {
    status.classList.toggle('next');
    player.classList.add('X', 'O');
    player.classList.remove(message);
    player.innerText = message === 'X' ? 'O' : 'X';
    gameBoard[i] = message;
    
    if (isGameOver()) stopGame();
  });
  
  const cells = Array.from(document.querySelectorAll('.cell'));
  
  cells.forEach((cell, i) => {
    let moveController = makeMove.bind(null, cell, i);
    moveControllers.push(moveController);
    cell.addEventListener('click', moveController, false);
  });
  
  document.getElementById('reset').addEventListener('click', startNewGame, false);
});

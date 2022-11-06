import './css/style.scss';
import eventBus from '@/bus';
import { startNewGame } from '@/reset';
import { X_WON, O_WON, TIE, winConditions, gameBoard } from '@/constants';
import { playerAction } from '@/actions';

document.addEventListener('DOMContentLoaded', () => {
  const player = document.getElementById('player');
  const status = document.getElementById('status');
  
  const isGameOver = () => {
    return winConditions.some(([a, b, c]) => 
      gameBoard[a] === gameBoard[b] && 
      gameBoard[b] === gameBoard[c] && 
      gameBoard[a] !== '');
  };
  
  eventBus.subscribe('move', ([message, i]) => {
    status.classList.toggle('next');
    player.classList.remove('X', 'O');
    player.classList.add(message);
    player.innerText = message;
    gameBoard[i] = message;
    if (isGameOver()) console.log('THE END');
  });
  
  const cells = Array.from(document.querySelectorAll('.cell'));
  
  cells.forEach((cell, i) => {
    cell.addEventListener('click', () => playerAction(cell, i));
  });
  
  document.getElementById('reset').addEventListener('click', startNewGame, false);
});

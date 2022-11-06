import './css/style.scss';
import eventBus from '@/bus';
import { startNewGame } from '@/reset';
import { X_WON, O_WON, TIE, winConditions, gameBoard } from '@/constants';
import { isValidMove, playerAction } from '@/actions';

document.addEventListener('DOMContentLoaded', () => {
  const player = document.getElementById('player');
  const status = document.getElementById('status');
  
  eventBus.subscribe('move', message => {
    console.log(`The player ${message} has made a move.`);
    status.classList.toggle('next');
    player.classList.remove('X', 'O');
    player.classList.add(message);
    player.innerText = message;
  });
  
  const cells = Array.from(document.querySelectorAll('.cell'));
  
  cells.forEach((cell, i) => {
    cell.addEventListener('click', () => playerAction(cell, i));
  });
  
  document.getElementById('reset').addEventListener('click', startNewGame);
});

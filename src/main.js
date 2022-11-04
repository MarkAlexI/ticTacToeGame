import './css/style.scss';
import { startNewGame } from '@/reset';
import { X_WON, O_WON, TIE, winConditions, gameBoard } from '@/constants';
import { activePlayer, isValidMove, playerAction } from '@/actions';

document.addEventListener('DOMContentLoaded', () => {
  
  const cells = Array.from(document.querySelectorAll('.cell'));
  
  cells.forEach((cell, i) => {
    cell.addEventListener('click', () => playerAction(cell, i));
  });
  
  document.getElementById('reset').addEventListener('click', startNewGame);
});

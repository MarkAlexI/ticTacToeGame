import './css/style.scss';
import { startNewGame } from '@/reset';
import { X_WON, O_WON, TIE, winConditions, gameBoard } from '@/constants'

document.addEventListener('DOMContentLoaded', () => {
  const cells = Array.from(document.querySelectorAll('.cell'));
  console.log(cells);
  
  document.getElementById('reset').addEventListener('click', startNewGame);
});

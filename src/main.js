import './css/style.scss';
import eventBus from '@/bus';
import { startNewGame } from '@/reset';
import { WON, TIE, winConditions, gameBoard, moveControllers } from '@/constants';
import { nextPlayer, makeMove, shrink, grow } from '@/actions';
import { openModalBtn, closeModalBtn, openModal, closeModal } from '@/modal';

document.addEventListener('DOMContentLoaded', () => {

  if (window.innerWidth > 645) grow();
  if (window.innerWidth < 312) shrink();

  const displayResult = (tie) => {
    tie ?
      document.getElementById('info').innerText = TIE :
      document.getElementById('last').innerText = WON;
  };

  const isTie = () => {
    return gameBoard.join('').length === gameBoard.length;
  };

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
    gameBoard[i] = message;

    if (isGameOver() || isTie()) {
      stopGame();
      displayResult(!isGameOver() && isTie());
    } else {
      nextPlayer(message);
    }
  });

  const cells = Array.from(document.querySelectorAll('.cell'));

  cells.forEach((cell, i) => {
    let moveController = makeMove.bind(null, cell, i);
    moveControllers.push(moveController);
    cell.addEventListener('click', moveController, false);
  });

  document.getElementById('low').addEventListener('click', shrink, false);
  
  document.getElementById('high').addEventListener('click', grow, false);

  document.getElementById('reset').addEventListener('click', startNewGame, false);
  
  openModalBtn.addEventListener('click', openModal, false);
  
  closeModalBtn.addEventListener('click', closeModal, false);
});

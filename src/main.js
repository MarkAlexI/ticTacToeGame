import './css/style.scss';
import eventBus from '@/bus';
import { startNewGame } from '@/reset';
import { WON, TIE, winConditions, gameBoard, moveControllers } from '@/constants';
import { makeMove } from '@/actions';

document.addEventListener('DOMContentLoaded', () => {
  const player = document.getElementById('player');
  const status = document.getElementById('status');

  const nextPlayer = (prevPlayer) => {
    status.classList.toggle('next');
    player.classList.add('X', 'O');
    player.classList.remove(prevPlayer);
    player.innerText = prevPlayer === 'X' ? 'O' : 'X';
  };

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
    gameBoard[i] = message;console.log(isTie());

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

  document.getElementById('reset').addEventListener('click', startNewGame, false);
});

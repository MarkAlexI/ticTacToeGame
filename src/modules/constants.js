const WON = ' won!';

const TIE = 'TIE';

const winConditions = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
];

const gameBoard = ['', '', '', '', '', '', '', '', ''];

const moveControllers = [];

export { WON, TIE, winConditions, gameBoard, moveControllers };

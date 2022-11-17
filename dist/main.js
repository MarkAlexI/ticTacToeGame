/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.scss */ \"./src/css/style.scss\");\n/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/bus */ \"./src/modules/bus.js\");\n/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/reset */ \"./src/modules/reset.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants */ \"./src/modules/constants.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/actions */ \"./src/modules/actions.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/grid */ \"./src/modules/grid.js\");\n/* harmony import */ var _fullscreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/fullscreen */ \"./src/modules/fullscreen.js\");\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  if (window.innerWidth > 645) (0,_actions__WEBPACK_IMPORTED_MODULE_4__.grow)();\n  if (window.innerWidth < 312) (0,_actions__WEBPACK_IMPORTED_MODULE_4__.shrink)();\n  const displayResult = tie => {\n    tie ? document.getElementById('info').innerText = _constants__WEBPACK_IMPORTED_MODULE_3__.TIE : document.getElementById('last').innerText = _constants__WEBPACK_IMPORTED_MODULE_3__.WON;\n  };\n  const isTie = () => {\n    return _constants__WEBPACK_IMPORTED_MODULE_3__.gameBoard.join('').length === _constants__WEBPACK_IMPORTED_MODULE_3__.gameBoard.length;\n  };\n  const isGameOver = () => {\n    return _constants__WEBPACK_IMPORTED_MODULE_3__.winConditions[-3 + _grid__WEBPACK_IMPORTED_MODULE_6__.rows].some(el => el.reduce((sum, curr) => sum && _constants__WEBPACK_IMPORTED_MODULE_3__.gameBoard[curr] === _constants__WEBPACK_IMPORTED_MODULE_3__.gameBoard[el[0]], _constants__WEBPACK_IMPORTED_MODULE_3__.gameBoard[el[0]] !== ''));\n  };\n  const stopGame = () => {\n    cells.forEach((cell, i) => cell.removeEventListener('click', _constants__WEBPACK_IMPORTED_MODULE_3__.moveControllers[i]));\n  };\n  _bus__WEBPACK_IMPORTED_MODULE_1__[\"default\"].subscribe('move', ([message, i]) => {\n    _constants__WEBPACK_IMPORTED_MODULE_3__.gameBoard[i] = message;\n    if (isGameOver() || isTie()) {\n      (0,_actions__WEBPACK_IMPORTED_MODULE_4__.vibrate)([400]);\n      stopGame();\n      displayResult(!isGameOver() && isTie());\n    } else {\n      (0,_actions__WEBPACK_IMPORTED_MODULE_4__.nextPlayer)(message);\n    }\n  });\n  const cells = Array.from(document.querySelectorAll('.cell'));\n  cells.forEach((cell, i) => {\n    let moveController = _actions__WEBPACK_IMPORTED_MODULE_4__.makeMove.bind(null, cell, i);\n    _constants__WEBPACK_IMPORTED_MODULE_3__.moveControllers.push(moveController);\n    cell.addEventListener('click', moveController, false);\n  });\n  document.getElementById('tofullscreen').addEventListener('click', _fullscreen__WEBPACK_IMPORTED_MODULE_7__.openFullscreen, false);\n  document.getElementById('tonormscreen').addEventListener('click', _fullscreen__WEBPACK_IMPORTED_MODULE_7__.closeFullscreen, false);\n  document.getElementById('low').addEventListener('click', _actions__WEBPACK_IMPORTED_MODULE_4__.shrink, false);\n  document.getElementById('high').addEventListener('click', _actions__WEBPACK_IMPORTED_MODULE_4__.grow, false);\n  document.getElementById('reset').addEventListener('click', _reset__WEBPACK_IMPORTED_MODULE_2__.startNewGame, false);\n  _modal__WEBPACK_IMPORTED_MODULE_5__.openModalBtn.addEventListener('click', _modal__WEBPACK_IMPORTED_MODULE_5__.openModal, false);\n  _modal__WEBPACK_IMPORTED_MODULE_5__.closeModalBtn.addEventListener('click', _modal__WEBPACK_IMPORTED_MODULE_5__.closeModal, false);\n  const changeLevel = num => {\n    if (_constants__WEBPACK_IMPORTED_MODULE_3__.gameBoard.length !== num ** 2) {\n      (0,_actions__WEBPACK_IMPORTED_MODULE_4__.vibrate)([200, 100, 200]);\n      localStorage.setItem('gridsize', num);\n      (0,_reset__WEBPACK_IMPORTED_MODULE_2__.startNewGame)();\n    } else {\n      return;\n    }\n  };\n  const levels = Array.from(document.getElementsByClassName('level'));\n  levels.forEach((level, i) => {\n    let newLevel = changeLevel.bind(null, i + 3);\n    level.addEventListener('click', newLevel, false);\n  });\n});\n\n//# sourceURL=webpack://ticTacToeGame/./src/main.js?");

/***/ }),

/***/ "./src/modules/actions.js":
/*!********************************!*\
  !*** ./src/modules/actions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"grow\": () => (/* binding */ grow),\n/* harmony export */   \"makeMove\": () => (/* binding */ makeMove),\n/* harmony export */   \"nextPlayer\": () => (/* binding */ nextPlayer),\n/* harmony export */   \"shrink\": () => (/* binding */ shrink),\n/* harmony export */   \"vibrate\": () => (/* binding */ vibrate)\n/* harmony export */ });\n/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/bus */ \"./src/modules/bus.js\");\n\nconst vibrate = (x = [200]) => navigator.vibrate(x);\nconst html = document.getElementsByTagName('html')[0];\nconst size = html.style.fontSize;\nlet activePlayer = 'X';\nconst player = document.getElementById('player');\nconst status = document.getElementById('status');\nconst nextPlayer = prevPlayer => {\n  status.classList.toggle('next');\n  player.classList.add('X', 'O');\n  player.classList.remove(prevPlayer);\n  player.innerText = prevPlayer === 'X' ? 'O' : 'X';\n};\nconst isValidMove = cell => cell.innerText ? false : true;\nconst changeActivePlayer = () => activePlayer = activePlayer === 'X' ? 'O' : 'X';\nconst playerAction = (cell, i) => {\n  if (isValidMove(cell)) {\n    cell.innerText = activePlayer;\n    vibrate();\n    _bus__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post('move', [activePlayer, i]);\n    changeActivePlayer();\n  }\n};\nconst makeMove = (cell, i) => {\n  playerAction(cell, i);\n};\nconst reSize = num => {\n  vibrate();\n  const newSize = parseFloat(window.getComputedStyle(html, null).getPropertyValue('font-size')) * num;\n  html.style.fontSize = `${newSize}px`;\n};\nconst shrink = () => reSize(.75);\nconst grow = () => reSize(1.25);\n\n\n//# sourceURL=webpack://ticTacToeGame/./src/modules/actions.js?");

/***/ }),

/***/ "./src/modules/bus.js":
/*!****************************!*\
  !*** ./src/modules/bus.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction EventBus() {\n  const eventCallbacksPairs = [];\n  this.subscribe = function (eventType, callback) {\n    const eventCallbacksPair = findEventCallbacksPair(eventType);\n    if (eventCallbacksPair) eventCallbacksPair.callbacks.push(callback);else eventCallbacksPairs.push(new EventCallbacksPair(eventType, callback));\n  };\n  this.post = function (eventType, args) {\n    const eventCallbacksPair = findEventCallbacksPair(eventType);\n    if (!eventCallbacksPair) {\n      console.error(\"no subscribers for event \" + eventType);\n      return;\n    }\n    eventCallbacksPair.callbacks.forEach(callback => callback(args));\n  };\n  function findEventCallbacksPair(eventType) {\n    return eventCallbacksPairs.find(eventObject => eventObject.eventType === eventType);\n  }\n  function EventCallbacksPair(eventType, callback) {\n    this.eventType = eventType;\n    this.callbacks = [callback];\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new EventBus());\n\n//# sourceURL=webpack://ticTacToeGame/./src/modules/bus.js?");

/***/ }),

/***/ "./src/modules/constants.js":
/*!**********************************!*\
  !*** ./src/modules/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TIE\": () => (/* binding */ TIE),\n/* harmony export */   \"WON\": () => (/* binding */ WON),\n/* harmony export */   \"gameBoard\": () => (/* binding */ gameBoard),\n/* harmony export */   \"moveControllers\": () => (/* binding */ moveControllers),\n/* harmony export */   \"winConditions\": () => (/* binding */ winConditions)\n/* harmony export */ });\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/grid */ \"./src/modules/grid.js\");\n\nconst WON = ' won!';\nconst TIE = 'TIE';\nconst winConditions = [[[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]], [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15], [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15], [0, 5, 10, 15], [3, 6, 9, 12]], [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [0, 5, 10, 15, 20], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], [3, 8, 13, 18, 23], [4, 9, 14, 19, 24], [0, 6, 12, 18, 24], [4, 8, 12, 16, 20]]];\nconst newGameBoard = () => Array(_grid__WEBPACK_IMPORTED_MODULE_0__.rows ** 2).fill('');\nconst gameBoard = newGameBoard();\nconst moveControllers = [];\n\n\n//# sourceURL=webpack://ticTacToeGame/./src/modules/constants.js?");

/***/ }),

/***/ "./src/modules/fullscreen.js":
/*!***********************************!*\
  !*** ./src/modules/fullscreen.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeFullscreen\": () => (/* binding */ closeFullscreen),\n/* harmony export */   \"openFullscreen\": () => (/* binding */ openFullscreen)\n/* harmony export */ });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/actions */ \"./src/modules/actions.js\");\n\nconst elem = document.querySelector('.game');\nconst toFullButton = document.getElementById('tofullscreen');\nconst toNormButton = document.getElementById('tonormscreen');\nconst shake = () => {\n  (0,_actions__WEBPACK_IMPORTED_MODULE_0__.vibrate)([200, 200, 200]);\n  toFullButton.classList.toggle('hidden');\n  toNormButton.classList.toggle('hidden');\n};\nfunction openFullscreen() {\n  shake();\n  if (elem.requestFullscreen) {\n    elem.requestFullscreen();\n  } else if (elem.webkitRequestFullscreen) {\n    /* Safari */\n    elem.webkitRequestFullscreen();\n  } else if (elem.msRequestFullscreen) {\n    /* IE11 */\n    elem.msRequestFullscreen();\n  }\n}\nfunction closeFullscreen() {\n  shake();\n  if (document.exitFullscreen) {\n    document.exitFullscreen();\n  } else if (document.webkitExitFullscreen) {\n    /* Safari */\n    document.webkitExitFullscreen();\n  } else if (document.msExitFullscreen) {\n    /* IE11 */\n    document.msExitFullscreen();\n  }\n}\n\n\n//# sourceURL=webpack://ticTacToeGame/./src/modules/fullscreen.js?");

/***/ }),

/***/ "./src/modules/grid.js":
/*!*****************************!*\
  !*** ./src/modules/grid.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rows\": () => (/* binding */ rows)\n/* harmony export */ });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/actions */ \"./src/modules/actions.js\");\n\nconst rows = +localStorage.getItem('gridsize') || 3;\nconst createNewField = () => {\n  const gameDiv = document.querySelector('.game');\n  const field = document.getElementById('field');\n  const divs = `<div class=\"cell\"></div>`.repeat(rows ** 2);\n  gameDiv.style.minWidth = `${6.8 * rows}rem`;\n  field.innerHTML = divs;\n  field.style.width = `${6.5 * rows}rem`;\n  field.style.gridTemplateColumns = `${Array(rows).fill('auto').join(' ')}`;\n  const size = parseFloat(window.getComputedStyle(gameDiv, null).getPropertyValue('width'));\n  if (size > window.screen.width) (0,_actions__WEBPACK_IMPORTED_MODULE_0__.shrink)();\n};\ncreateNewField();\n\n\n//# sourceURL=webpack://ticTacToeGame/./src/modules/grid.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"closeModalBtn\": () => (/* binding */ closeModalBtn),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal),\n/* harmony export */   \"openModalBtn\": () => (/* binding */ openModalBtn)\n/* harmony export */ });\nconst modal = document.querySelector(\".modal\");\nconst overlay = document.querySelector(\".overlay\");\nconst openModalBtn = document.querySelector(\".btn-open\");\nconst closeModalBtn = document.querySelector(\".btn-close\");\nconst openModal = function () {\n  modal.classList.remove(\"hidden\");\n  overlay.classList.remove(\"hidden\");\n};\nconst closeModal = function () {\n  modal.classList.add(\"hidden\");\n  overlay.classList.add(\"hidden\");\n};\noverlay.addEventListener('click', closeModal, false);\ndocument.addEventListener(\"keydown\", function (e) {\n  if (e.key === \"Escape\" && !modal.classList.contains(\"hidden\")) {\n    closeModal();\n  }\n});\n\n\n//# sourceURL=webpack://ticTacToeGame/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/reset.js":
/*!******************************!*\
  !*** ./src/modules/reset.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startNewGame\": () => (/* binding */ startNewGame)\n/* harmony export */ });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/actions */ \"./src/modules/actions.js\");\n\nfunction startNewGame() {\n  (0,_actions__WEBPACK_IMPORTED_MODULE_0__.vibrate)([100, 100, 100, 100, 100]);\n  setTimeout(reloadPage, 1200);\n}\nfunction reloadPage() {\n  window.location.reload();\n}\n\n//# sourceURL=webpack://ticTacToeGame/./src/modules/reset.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/css/style.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/css/style.scss ***!
  \*************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto-Bold.ttf */ \"./src/assets/fonts/Roboto-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/KolkerBrush-Regular.ttf */ \"./src/assets/fonts/KolkerBrush-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n@font-face {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  font-weight: normal;\\n  font-style: normal;\\n  font-display: swap;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"truetype\\\");\\n}\\n@font-face {\\n  font-family: \\\"Kolker Brush\\\", cursive;\\n  font-weight: normal;\\n  font-style: normal;\\n  font-display: swap;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"truetype\\\");\\n}\\nbody {\\n  position: relative;\\n  min-height: 100vh;\\n}\\n\\n.overlay {\\n  position: fixed;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  width: 100%;\\n  height: 100%;\\n  background: rgba(0, 0, 0, 0.5);\\n  backdrop-filter: blur(3px);\\n  z-index: 1;\\n}\\n\\n.modal {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  gap: 0.4rem;\\n  width: 18.5rem;\\n  padding: 1.3rem;\\n  min-height: 15.6rem;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  position: absolute;\\n  top: 20%;\\n  left: calc(50% - 10.6rem);\\n  background-color: white;\\n  border: 1px solid #ddd;\\n  border-radius: 15px;\\n  z-index: 2;\\n}\\n\\n.modal .flex {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.modal p {\\n  font-size: 0.9rem;\\n  color: #777;\\n  margin: 0.4rem 0 0.2rem;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.btn-close {\\n  transform: translate(10px, -20px);\\n  padding: 0.5rem 0.7rem;\\n  background: #eee;\\n  border-radius: 50%;\\n}\\n\\n.btn, .cell {\\n  cursor: pointer;\\n}\\n\\nbody {\\n  background-color: darkblue;\\n}\\n\\n.game {\\n  width: 100%;\\n  background-color: black;\\n  min-height: 35rem;\\n  font-family: \\\"Kolker Brush\\\", cursive;\\n}\\n\\nh1 {\\n  color: red;\\n  display: inline-block;\\n  padding: 1rem;\\n}\\nh1.next {\\n  color: blue;\\n}\\n\\np {\\n  display: inline;\\n}\\n\\n.title {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 1rem;\\n  font-size: 2rem;\\n  margin-top: 18%;\\n  line-height: 5rem;\\n}\\n\\n.info {\\n  color: white;\\n  font-size: 1.75rem;\\n  text-align: center;\\n  margin-top: 0.8em;\\n  margin-bottom: 0.8em;\\n}\\n\\n.field {\\n  display: grid;\\n  justify-content: center;\\n  /* max-width: 19.5rem;*/\\n  margin: 0 auto;\\n  grid-template-columns: repeat(auto-fill, minmax(6.25rem, 6.25rem));\\n  background-color: lightblue;\\n  padding: clamp(5px, 20px, 0.625rem);\\n}\\n\\n.cell {\\n  background-color: black;\\n  color: white;\\n  border: 2px solid lightblue;\\n  min-width: 6.25rem;\\n  min-height: 6.25rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 3.25rem;\\n}\\n\\n.X {\\n  color: yellow;\\n}\\n\\n.O {\\n  color: green;\\n}\\n\\n.buttons {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  column-gap: 1.5rem;\\n  padding-bottom: 1rem;\\n}\\n\\n.btn {\\n  padding: 10px;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  font-size: 1.2rem;\\n  border-radius: 5px;\\n}\\n\\n.inset {\\n  background: linear-gradient(to right, #b9b9b9, #565656);\\n  color: transparent;\\n  text-shadow: 0px 2px 3px rgba(255, 255, 255, 0.5);\\n  -webkit-background-clip: text;\\n  -moz-background-clip: text;\\n  background-clip: text;\\n  border: 2px inset;\\n  border-color: gray darkslategrey darkslategrey gray;\\n}\\n\\n#reset {\\n  color: white;\\n  border: blueviolet;\\n  background: blue;\\n  transition: all ease 1.2s;\\n  transition-property: filter, transform, color;\\n}\\n#reset:hover {\\n  background-color: violet;\\n  filter: drop-shadow(0.25rem 0 0.75rem #ef9035);\\n  transform: perspective(50em) rotateY(50deg);\\n  color: gold;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ticTacToeGame/./src/css/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B2%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://ticTacToeGame/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://ticTacToeGame/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ticTacToeGame/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/css/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ticTacToeGame/./src/css/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ticTacToeGame/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ticTacToeGame/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ticTacToeGame/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ticTacToeGame/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ticTacToeGame/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ticTacToeGame/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/fonts/KolkerBrush-Regular.ttf":
/*!**************************************************!*\
  !*** ./src/assets/fonts/KolkerBrush-Regular.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7b031fc50c0582355339.ttf\";\n\n//# sourceURL=webpack://ticTacToeGame/./src/assets/fonts/KolkerBrush-Regular.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Roboto-Bold.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Roboto-Bold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f80816a5455d171f948d.ttf\";\n\n//# sourceURL=webpack://ticTacToeGame/./src/assets/fonts/Roboto-Bold.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;
const rows =+localStorage.getItem('gridsize') || 3;
/*const grid = {
  value: +localStorage.getItem('gridsize') || 3,
  get rows() {
    return this.value;
  },
  set rows(int) {
    this.value = int;
  }
};
*/
const createNewField = () => {
  const field = document.getElementById('field');
  const divs = `<div class="cell"></div>`.repeat(rows ** 2);
  field.innerHTML = divs;
  field.style.maxWidth = `${6.5 * rows}rem`;
  field.style.gridTemplateColumns = `${ Array(rows).fill('auto').join(' ') }`;
};

createNewField();

/*const handler = {
  set(target, prop, value) {
    if (target[prop] !== value) {
      console.log(`changed ${prop} from ${target[prop]} to ${value}`);
      target[prop] = value;
      gameBoard.length = 0;;
      gameBoard.push(...newGameBoard());
      createNewField();console.log(gameBoard);
    }
    return value;
  },
};

const proxyGrid = new Proxy(grid, handler);*/

export { rows };

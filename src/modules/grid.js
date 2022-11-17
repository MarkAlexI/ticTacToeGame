import { shrink } from '@/actions';

const rows =+localStorage.getItem('gridsize') || 3;

const createNewField = () => {
  const gameDiv = document.querySelector('.game');
  const field = document.getElementById('field');
  const divs = `<div class="cell"></div>`.repeat(rows ** 2);
  
  gameDiv.style.minWidth = `${6.8 * rows}rem`;
  field.innerHTML = divs;
  field.style.width = `${6.5 * rows}rem`;
  field.style.gridTemplateColumns = `${ Array(rows).fill('auto').join(' ') }`;
  
  const size = parseFloat(window.getComputedStyle(gameDiv, null).getPropertyValue('width'));
  if (size > window.screen.width) shrink();
};

createNewField();

export { rows };

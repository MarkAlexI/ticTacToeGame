import './css/style.scss';
import { startNewGame } from '@/reset.js';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('reset').addEventListener('click', startNewGame);
});

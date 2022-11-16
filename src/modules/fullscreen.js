import { vibrate } from '@/actions';

const elem = document.querySelector('.game');

const toFullButton = document.getElementById('tofullscreen');

const toNormButton = document.getElementById('tonormscreen');

const shake = () => {
  vibrate([200, 200, 200]);
  toFullButton.classList.toggle('hidden');
  toNormButton.classList.toggle('hidden');
};

function openFullscreen() {
  shake();
  
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  shake();
  
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

export { openFullscreen, closeFullscreen };

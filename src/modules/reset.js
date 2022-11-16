import { vibrate } from '@/actions';

export function startNewGame() {
  vibrate([100, 100, 100, 100, 100]);
  setTimeout(reloadPage, 1200);
}

function reloadPage() {
  window.location.reload();
}

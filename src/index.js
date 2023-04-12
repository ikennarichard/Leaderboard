import './style.css';
import FetchHandlers from './modules/handlers.js';
import Utils from './modules/utils.js';

const handlers = new FetchHandlers();
const form = document.querySelector('form');
const refresh = document.querySelector('.refresh');

window.addEventListener('DOMContentLoaded', async () => {
  await handlers.createNewGame();
  handlers.refreshScores();
  Utils.toggleTheme();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handlers.postScore();
    Utils.clearInput();
  });

  refresh.addEventListener('click', () => handlers.refreshScores());
});
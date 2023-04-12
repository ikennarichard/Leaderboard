import './style.css';
import FetchHandlers from './modules/handlers.js';

const handlers = new FetchHandlers();
const form = document.querySelector('form');
const refresh = document.querySelector('.refresh');

const clearInput = () => {
  document.querySelector('.user_name').value = '';
  document.querySelector('.user_score').value = '';
};

window.addEventListener('DOMContentLoaded', () => {
  handlers.createNewGame();
  handlers.refreshScores();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handlers.postScore();
    clearInput();
  });

  refresh.addEventListener('click', () => handlers.refreshScores());
});
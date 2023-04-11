import './style.css';
import Utils from './modules/utils.js';

const user = new Utils();
const form = document.querySelector('form');

const clearInput = () => {
  document.querySelector('.user_name').value = '';
  document.querySelector('.user_score').value = '';
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = document.querySelector('.user_name').value;
  const userScore = document.querySelector('.user_score').value;

  user.addScore(userName, userScore);
  clearInput();
});

window.onload = user.displayScores();
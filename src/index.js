import './style.css';
import Utils from './modules/utils.js';

const user = new Utils();
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = document.querySelector('.user_name').value;
  const userScore = document.querySelector('.user_score').value;

  user.addScore(userName, userScore);
});

window.onload = user.displayScores();
/* eslint-disable class-methods-use-this */
import UserScore from './userScore.js';

export default class Utils {
  constructor() {
    this.scoreList = JSON.parse(localStorage.getItem('scores')) || [];
  }

  addScore(name, score) {
    const userScore = UserScore(name, score);
    this.addToScoresList(userScore);
    this.updateStorage(score);
    this.displayScores();
  }

  addToScoresList(score) {
    this.scoreList.push(score);
  }

  updateStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }

  getScores(arr) {
    const list = arr.map((item, i) => `<li id=${i}> ${item.name}: ${item.score}</l1>`);
    return list;
  }

  displayScores() {
    document.querySelector('.score_list').innerHTML = this.getScores(this.scoreList);
  }
}
/* eslint-disable class-methods-use-this */
export default class Utils {
  static getScores(result) {
    const list = result.sort((a, b) => a.score - b.score).map((item, i) => `<li id='${i}'> ${item.user}: ${item.score}</l1>`).join('');
    return list;
  }

  static displayScores(scores) {
    if (scores.length === 0) {
      document.querySelector('.score_list').innerHTML = '<li>No scores added yet';
    } else {
      document.querySelector('.score_list').innerHTML = Utils.getScores(scores);
    }
  }

  static displayStatus(result) {
    document.querySelector('.status').innerText = result;
    setTimeout(() => {
      document.querySelector('.status').innerText = '';
    }, 1300);
  }

  static addToStorage(data) {
    localStorage.setItem('ID', JSON.stringify(data));
  }

  static getFromStorage() {
    return JSON.parse(localStorage.getItem('ID'));
  }
}
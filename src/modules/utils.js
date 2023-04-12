/* eslint-disable class-methods-use-this */
export default class Utils {
  static getScores(result) {
    const list = result.sort((a, b) => a.score - b.score).map((item, i) => `<li id='${i}'> ${item.user}: ${item.score}</l1>`).join('');
    return list;
  }

  static displayScores(scores) {
    if (!scores) {
      document.querySelector('.score_list').innerHTML = '<li>No scores added yet</li>';
    }
    document.querySelector('.score_list').innerHTML = Utils.getScores(scores);
  }
}
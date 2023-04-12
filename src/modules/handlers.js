/* eslint-disable class-methods-use-this */
import Utils from './utils.js';
import UserScore from './userScore.js';

export default class FetchHandlers {
  async get(endpoint) {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  }

  async post(endpoint, data) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (e) {
      throw new Error(e);
    }
  }

  async createNewGame() {
    if (FetchHandlers.getFromStorage()) {
      return;
    }
    const { result } = await this.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', { name: 'My cool new game' });
    const id = result.slice(15, -7);
    FetchHandlers.addToStorage(id);
  }

  async postScore() {
    const user = document.querySelector('.user_name').value.trim();
    const score = document.querySelector('.user_score').value.trim();
    const item = new UserScore(user, score);
    try {
      const { result } = await this.post(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${FetchHandlers.getFromStorage()}/scores`, item);

      Utils.displayStatus(result);
    } catch (e) {
      throw new Error(e);
    }
  }
}
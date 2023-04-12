/* eslint-disable class-methods-use-this */
import Utils from './utils.js';

export default class FetchHandlers {
  async get(endpoint) {
    const resposnse = await fetch(endpoint);
    const data = await resposnse.json();
    return data;
  }

  static async post(endpoint, data) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch (e) {
      throw new Error(e);
    }
  }

  static async createID() {
    const { result } = await FetchHandlers.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', { name: 'My cool new game' });

    console.log(result)
    return result.slice(15, -7).trim();
  }

  static addToStorage(data) {
    localStorage.setItem('ID', JSON.stringify(data));
  }

  static getFromStorage() {
    return JSON.parse(localStorage.getItem('ID'));
  }

  async createNewGame() {
    if (FetchHandlers.getFromStorage() === undefined) { 
      return;
    }
    const id = await FetchHandlers.createID();
    FetchHandlers.addToStorage(id);
  }

  async postScore() {
    const name = document.querySelector('.user_name').value;
    const score = document.querySelector('.user_score').value;
    const item = {
      name,
      score,
    };
    try {
      const res = await FetchHandlers.post(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${FetchHandlers.getFromStorage()}/scores`, item);

      console.log(res);
    } catch (e) {
      throw new Error(e);
    }
  }

  async refreshScores() {
    try {
      const { result } = await this.get(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${FetchHandlers.getFromStorage()}/scores`);
      Utils.displayScores(result);
    } catch (e) {
      throw new Error(e);
    }
  }
}
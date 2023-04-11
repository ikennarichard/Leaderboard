/* eslint-disable class-methods-use-this */
import Utils from "./utils.js";

export default class FetchHandlers {
  async get(endpoint) {
    const resposnse = await fetch(endpoint);
    const data = await resposnse.json();
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
      const result = response.json();
      return result;
    } catch (e) {
      throw new Error(e);
    }
  }

  static createID() {
    const { item } = this.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', { name: 'My cool new game' });
    return item.slice(15, -7).trim();
  }

  addToStorage(data) {
    localStorage.setItem('ID', JSON.stringify(data));
  }

  getFromStorage() {
    return JSON.parse(localStorage.getItem('ID'));
  }

  createNewGame() {
    if (!this.getFromStorage()) {
      const id = FetchHandlers.createID();
      this.addToStorage(id);
    }
  }

  async refreshScores() {
    try {
      const { result } = await this.get(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.getFromStorage()}/scores`);
      Utils.displayScores(result);
    } catch (e) {
      throw new Error(e);
    }
  }
}
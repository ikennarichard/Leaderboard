/* eslint-disable class-methods-use-this */
export default class FetchHelpers {
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
    } catch (error) {
      throw new Error(error);
    }
  }

  createID() {
    const id = this.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/', { name: 'My cool new game' });
    return id.slice(15, -7).trim();
  }

  addToStorage(data) {
    localStorage.setItem('ID', JSON.stringify(data));
  }

  getFromStorage() {
    return JSON.parse(localStorage.getItem('ID'));
  }
}
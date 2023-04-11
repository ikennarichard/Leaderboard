/* eslint-disable class-methods-use-this */
export default class FetchHelpers {
  async get(endpoint) {
    const resposnse = await fetch(endpoint);
    const data = await resposnse.json();
    return data
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


  } catch (error) {
    throw new Error(error);
  }
  }

  createNewGame() {

  }
}
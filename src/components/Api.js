export class Api {
  constructor(apiConfig) {
    this._baseUrl = apiConfig.baseUrl;
    this._init = apiConfig.init;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, this._init);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, this._init);
  }

  sendRequest(urlEnding, method, data = null) {
    this._init.method = method;

    if (data) {
      this._init.body = JSON.stringify(data);
    }

    const url = this._baseUrl + urlEnding;

    return fetch(url, this._init)
      .then((res) => {
        if (!res.ok) {
          console.log("Сервер ответил ошибкой: " + res.status);
        } else {
          return res.json();
        }
      })
      .catch((err) => {
        console.log("Что-то пошло не так: " + err);
      });
  }
}

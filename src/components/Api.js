export class Api {
  constructor(apiConfig) {
    this._baseUrl = apiConfig.baseUrl;
    this._init = apiConfig.init;
  }

  requestInitialCards() {
    return this.sendRequest("cards", "GET");
  }

  requestUserInfo() {
    return this.sendRequest("users/me", "GET");
  }

  sendRequest(urlEnding, method, data = null) {
    this._init.method = method;
    const url = this._baseUrl + urlEnding;

    if (data) {
      this._init.body = JSON.stringify(data);
    }

    return fetch(url, this._init).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject("Сервер ответил ошибкой: " + res.status);
      }
    });
  }
}

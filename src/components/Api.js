export class Api {
  constructor(apiConfig) {
    this._baseUrl = apiConfig.baseUrl;
    this._init = apiConfig.init;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, this._init);
  }
}

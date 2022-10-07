export class UserInfo {
  constructor({ userNameSelector, userOccupationSelector }) {
    this._nameElement = document.querySelector(userNameSelector);
    this._occupationElement = document.querySelector(userOccupationSelector);
  }

  getUserInfo() {
    const userData = {
      name: this._nameElement.textContent,
      occupation: this._occupationElement.textContent,
    };

    return userData;
  }

  setUserInfo({ name, occupation }) {
    this._nameElement.textContent = name;
    this._occupationElement.textContent = occupation;
  }
}

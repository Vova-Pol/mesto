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

  setUserInfo(newName, newOccupation) {
    this._nameElement.textContent = newName;
    this._occupationElement.textContent = newOccupation;
  }
}

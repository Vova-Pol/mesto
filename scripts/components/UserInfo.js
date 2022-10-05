export class UserInfo {
  constructor({ userNameSelector, userOccupationSelector }) {
    this._name = document.querySelector(userNameSelector);
    this._occupation = document.querySelector(userOccupationSelector);
  }

  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      occupation: this._occupation.textContent,
    };

    return userData;
  }

  setUserInfo(newName, newOccupation) {
    this._name.textContent = newName;
    this._occupation.textContent = newOccupation;
  }
}

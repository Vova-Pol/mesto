export class UserInfo {
  constructor({
    userNameSelector,
    userOccupationSelector,
    userAvatarSelector,
  }) {
    this._nameElement = document.querySelector(userNameSelector);
    this._occupationElement = document.querySelector(userOccupationSelector);
    this._avatarElement = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    const userData = {
      name: this._nameElement.textContent,
      occupation: this._occupationElement.textContent,
    };

    return userData;
  }

  setUserInfo({ name, about }) {
    this._nameElement.textContent = name;
    this._occupationElement.textContent = about;
  }

  setUserAvatar({ avatar }) {
    this._avatarElement.src = avatar;
  }
}

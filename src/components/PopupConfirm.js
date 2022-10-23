import { Popup } from "./Popup.js";

export class PopupConfirm extends Popup {
  constructor(popupSelector, cardElement, cardId) {
    super(popupSelector);
    this._cardElement = cardElement;
    this._cardId = cardId;
    this._formElement = this._element.querySelector("form");
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._cardElement.remove();
      this._cardElement = null;

      const deleteCardRequestURL = `https://mesto.nomoreparties.co/v1/cohort-52/cards/${this._cardId}`;

      fetch(deleteCardRequestURL, {
        method: "DELETE",
        headers: {
          authorization: "a1ce3bf4-12b8-45c2-ab0a-cd13960bbeb4",
        },
      })
        .then((res) => {
          console.log("Удаление прошло успешно: " + res);
        })
        .catch((err) => {
          console.log("Ошибка: " + err);
        });

      this.close();
    });
  }
}

import { Popup } from "./Popup.js";
import { api } from "../pages/index.js";

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

      const deleteCardUrlEnding = `cards/${this._cardId}`;

      api.sendRequest(deleteCardUrlEnding, "DELETE");

      this.close();
    });
  }
}

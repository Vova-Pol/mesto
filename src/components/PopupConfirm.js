import { Popup } from "./Popup.js";

export class PopupConfirm extends Popup {
  constructor(popupSelector, cardId, { handleSubmit }) {
    super(popupSelector);
    this._cardId = cardId;
    this._handleSubmit = handleSubmit;
    this._formElement = this._element.querySelector("form");
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._cardId);
    });
  }
}

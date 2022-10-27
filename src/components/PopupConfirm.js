import { Popup } from "./Popup.js";

export class PopupConfirm extends Popup {
  constructor(popupSelector, { handleSubmit }) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._formElement = this._element.querySelector("form");
  }

  setSubmitListener(id, card) {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(id, card);
    });
  }
}

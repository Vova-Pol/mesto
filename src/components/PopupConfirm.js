import { Popup } from "./Popup.js";

export class PopupConfirm extends Popup {
  constructor(popupSelector, { handleSubmit }) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._formElement = this._element.querySelector("form");
    this._handleSubmitButtonBound = this._handleSubmitButton.bind(this);
  }

  setCardData(id, card) {
    this._cardId = id;
    this._cardElement = card;
  }

  _handleSubmitButton(evt) {
    evt.preventDefault();
    this._handleSubmit(this._cardId, this._cardElement);
  }

  addSubmitListener() {
    this._formElement.addEventListener(
      "submit",
      (evt) => {
        evt.preventDefault();
        this._handleSubmit(this._cardId, this._cardElement);
      },
      { once: true }
    );
  }
}

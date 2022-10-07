import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, { handleSubmitForm }) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this.formElement = this._element.querySelector("form");
    this._inputsList = Array.from(this.formElement.querySelectorAll("input"));
  }

  _getInputsValues() {
    return this._inputsList.map((input) => input.value);
  }

  setEventListeners() {
    super.setEventListeners();

    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const valuesArray = this._getInputsValues();
      this._handleSubmitForm(valuesArray);
      this.close();
    });
  }

  close() {
    super.close();
    this.formElement.reset();
  }
}

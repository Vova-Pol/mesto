import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, { handleSubmitForm }) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this.formElement = this._element.querySelector("form");
    this._inputsList = Array.from(this.formElement.querySelectorAll("input"));
  }

  _getInputsValues() {
    const inputsValues = {};

    this._inputsList.forEach((input) => {
      inputsValues[input.name] = input.value;
    });

    return inputsValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();

      const inputsValues = this._getInputsValues();
      this._handleSubmitForm(inputsValues);
      this.close();
    });
  }

  close() {
    super.close();
    this.formElement.reset();
  }
}

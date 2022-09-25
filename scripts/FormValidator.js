class FormValidator {
  constructor(validationConfig, formElement) {
    this._validationConfig = validationConfig;
    this._formElement = formElement;
    this._buttonElement = formElement.querySelector(
      validationConfig.buttonSelector
    );
    this._inputsList = Array.from(formElement.querySelectorAll("input"));
  }

  _checkIsInputValid(inputElem) {
    if (inputElem.validity.valid) {
      this._hideInputError(inputElem);
    } else {
      this._showInputError(inputElem);
    }
  }

  _showInputError(inputElem) {
    this._formElement.querySelector(`#${inputElem.id}-error`).textContent =
      inputElem.validationMessage;
    inputElem.classList.add(this._validationConfig.inputErrorClass);
  }

  _hideInputError(inputElem) {
    this._formElement.querySelector(`#${inputElem.id}-error`).textContent = "";
    inputElem.classList.remove(this._validationConfig.inputErrorClass);
  }

  _setEventListeners() {
    this._inputsList.forEach((input) => {
      input.addEventListener("input", (evt) => {
        this._checkIsInputValid(evt.currentTarget);
        this._toggleSubmitButton();
      });
    });
  }

  _toggleSubmitButton() {
    if (this._hasInvalidInput()) {
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.disabled = false;
    }
  }

  _hasInvalidInput() {
    return this._inputsList.some((input) => !input.validity.valid);
  }

  enableValidation() {
    this._setEventListeners();
    this._toggleSubmitButton();
  }

  resetValidation() {
    this._toggleSubmitButton();
    this._inputsList.forEach((inputElem) => {
      this._hideInputError(inputElem);
    });
  }
}

const validationConfig = {
  inputSelector: ".popup__input",
  buttonSelector: ".popup__save-button",
  errorSelector: ".popup__input-error",
  inputErrorClass: "popup__input_type_error",
};

export { FormValidator, validationConfig };

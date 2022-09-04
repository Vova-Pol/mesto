/* ----- Forms Validation Func ----- */

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inputErrorClass: "popup__input_type_error",
};

function showInputError(inputElem, formElem, validationConfig) {
  inputElem.classList.add(validationConfig.inputErrorClass);
  const errorElement = formElem.querySelector(`#${inputElem.id}-error`);
  errorElement.textContent = inputElem.validationMessage;
}

function hideInputError(inputElem, formElem, validationConfig) {
  inputElem.classList.remove(validationConfig.inputErrorClass);
  const errorElement = formElem.querySelector(`#${inputElem.id}-error`);
  errorElement.textContent = "";
}

function checkIsInputValid(inputElem, formElem, validationConfig) {
  if (inputElem.validity.valid) {
    hideInputError(inputElem, formElem, validationConfig);
  } else {
    showInputError(inputElem, formElem, validationConfig);
  }
}

function setEventListenersForInputs(formElem, validationConfig) {
  const inputsList = Array.from(
    formElem.querySelectorAll(validationConfig.inputSelector)
  );
  const buttonElem = formElem.querySelector(
    validationConfig.submitButtonSelector
  );

  toggleSubmitButtonState(inputsList, buttonElem);

  inputsList.forEach((inputElem) => {
    inputElem.addEventListener("input", () => {
      checkIsInputValid(inputElem, formElem, validationConfig);
      toggleSubmitButtonState(inputsList, buttonElem);
    });
  });
}

function enableValidation(validationConfig) {
  const formsList = Array.from(
    document.querySelectorAll(validationConfig.formSelector)
  );
  formsList.forEach((formElem) => {
    setEventListenersForInputs(formElem, validationConfig);
  });
}

enableValidation(validationConfig);

/* ----- Submit Button State Func ----- */

function hasInvalidInput(inputsList) {
  return inputsList.some((input) => !input.validity.valid);
}

function toggleSubmitButtonState(inputsList, buttonElem) {
  if (hasInvalidInput(inputsList)) {
    buttonElem.disabled = true;
  } else {
    buttonElem.disabled = false;
  }
}

/** Reset input validation and toggle Submit button state */

function resetValidation(inputsList, buttonElem, popupForm, validationConfig) {
  toggleSubmitButtonState(inputsList, buttonElem);
  inputsList.forEach((inputElem) => {
    hideInputError(inputElem, popupForm, validationConfig);
  });
}

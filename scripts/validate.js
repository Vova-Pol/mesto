/* ----- Forms Validation Func ----- */

const elementsSelectors = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inputErrorClass: "popup__input_type_error",
};

function showInputError(inputElem, formElem) {
  inputElem.classList.add(elementsSelectors.inputErrorClass);
  const errorElement = formElem.querySelector(`#${inputElem.id}-error`);
  errorElement.textContent = inputElem.validationMessage;
}

function hideInputError(inputElem, formElem) {
  inputElem.classList.remove(elementsSelectors.inputErrorClass);
  const errorElement = formElem.querySelector(`#${inputElem.id}-error`);
  errorElement.textContent = "";
}

function isInputValid(inputElem, formElem) {
  if (inputElem.validity.valid) {
    hideInputError(inputElem, formElem);
  } else {
    showInputError(inputElem, formElem);
  }
}

function setEventListenersForInputs(formElem) {
  const inputsList = Array.from(
    formElem.querySelectorAll(elementsSelectors.inputSelector)
  );
  const buttonElem = formElem.querySelector(
    elementsSelectors.submitButtonSelector
  );

  toggleSubmitButtonState(inputsList, buttonElem);

  inputsList.forEach((inputElem) => {
    inputElem.addEventListener("input", () => {
      isInputValid(inputElem, formElem);
      toggleSubmitButtonState(inputsList, buttonElem);
    });
  });
}

function validateAllForms(elementsSelectors) {
  const formsList = Array.from(
    document.querySelectorAll(elementsSelectors.formSelector)
  );
  formsList.forEach((formElem) => {
    setEventListenersForInputs(formElem);
  });
}

validateAllForms(elementsSelectors);

/* ----- Submit Button State Func ----- */

function hasInvalidInput(inputsList) {
  return inputsList.some((input) => !input.validity.valid);
}

function toggleSubmitButtonState(inputsList, buttonElem) {
  if (hasInvalidInput(inputsList)) {
    buttonElem.setAttribute("disabled", "disabled");
  } else {
    buttonElem.removeAttribute("disabled");
  }
}

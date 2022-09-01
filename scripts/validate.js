/* ----- All Forms Validation ----- */

function showInputError(inputElem, formElem) {
  inputElem.classList.add("popup__input_type_error");
  const errorElement = formElem.querySelector(`#${inputElem.id}-error`);
  errorElement.textContent = inputElem.validationMessage;
}

function hideInputError(inputElem, formElem) {
  inputElem.classList.remove("popup__input_type_error");
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
  const inputsList = Array.from(formElem.querySelectorAll("input"));
  const buttonElem = formElem.querySelector(".popup__save-button");

  toggleSubmitButtonState(inputsList, buttonElem);

  inputsList.forEach((inputElem) => {
    inputElem.addEventListener("input", () => {
      isInputValid(inputElem, formElem);
      toggleSubmitButtonState(inputsList, buttonElem);
    });
  });
}

function validateAllForms() {
  const formsList = Array.from(document.forms);
  formsList.forEach((formElem) => {
    setEventListenersForInputs(formElem);
  });
}

validateAllForms();

/* ----- Submit Button ----- */

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

export const buttonEdit = document.querySelector(".profile__edit-button");
export const nameInput = document.querySelector("#profile-name-input");
export const occupationInput = document.querySelector(
  "#profile-occupation-input"
);
export const buttonAddPost = document.querySelector(".profile__add-button");

export const buttonEditAvatar = document.querySelector(
  ".profile__edit-icon-container"
);

export const validationConfig = {
  inputSelector: ".popup__input",
  buttonSelector: ".popup__save-button",
  errorSelector: ".popup__input-error",
  inputErrorClass: "popup__input_type_error",
};

export const apiConfig = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-52/",
  init: {
    headers: {
      authorization: "a1ce3bf4-12b8-45c2-ab0a-cd13960bbeb4",
      "Content-Type": "application/json",
    },
  },
};

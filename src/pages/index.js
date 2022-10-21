/**
 * Token: a1ce3bf4-12b8-45c2-ab0a-cd13960bbeb4
 * ID: cohort-52
 */

// Css import
import "./index.css";

// Constants import
import {
  cardsData,
  cardsContainer,
  buttonEdit,
  nameInput,
  occupationInput,
  buttonAddPost,
  validationConfig,
} from "../utils/constants.js";

// Utils import
import { createCard } from "../utils/utils.js";

// Components import
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";

// --- Add cards from the box

const cardsDataRequestURL =
  "https://mesto.nomoreparties.co/v1/cohort-52/cards ";

fetch(cardsDataRequestURL, {
  headers: {
    authorization: "a1ce3bf4-12b8-45c2-ab0a-cd13960bbeb4",
  },
})
  .then((res) => res.json())
  .then((data) => {
    const cardsList = new Section(
      {
        renderer: (itemData) => {
          const card = createCard(itemData, "#place-card");
          cardsList.addItem(card);
        },
      },
      ".elements__list"
    );

    cardsList.renderItems(data);
  });

// --- User Info

const userInfoRequestURL = "https://nomoreparties.co/v1/cohort-52/users/me";

const userInfoElement = new UserInfo({
  userNameSelector: ".profile__name",
  userOccupationSelector: ".profile__occupation",
  userAvatarSelector: ".profile__picture",
});

fetch(userInfoRequestURL, {
  headers: {
    authorization: "a1ce3bf4-12b8-45c2-ab0a-cd13960bbeb4",
  },
})
  .then((res) => res.json())
  .then((data) => {
    const userData = {
      name: data.name,
      about: data.about,
      avatarLink: data.avatar,
    };
    userInfoElement.setUserInfo(userData);
  })
  .catch(() => {
    console.log("Что-то пошло не так.");
  });

// --- Popup Edit Profile

const popupEdit = new PopupWithForm("#popup-edit", {
  handleSubmitForm: (inputsValues) => {
    userInfoElement.setUserInfo(inputsValues);

    fetch("https://mesto.nomoreparties.co/v1/cohort-52/users/me", {
      method: "PATCH",
      headers: {
        authorization: "a1ce3bf4-12b8-45c2-ab0a-cd13960bbeb4",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputsValues),
    });
  },
});

popupEdit.setEventListeners();

// --- Profile Form Validator

const profileEditFormValidator = new FormValidator(
  validationConfig,
  popupEdit.formElement
);

profileEditFormValidator.enableValidation();

buttonEdit.addEventListener("click", () => {
  const userData = userInfoElement.getUserInfo();

  nameInput.value = userData.name;
  occupationInput.value = userData.occupation;

  profileEditFormValidator.resetValidation();
  popupEdit.open();
});

// --- Popup Add Post

const popupAddPost = new PopupWithForm("#popup-add-post", {
  handleSubmitForm: (inputsValues) => {
    const cardElement = createCard(inputsValues, "#place-card");

    fetch("https://mesto.nomoreparties.co/v1/cohort-52/cards", {
      method: "POST",
      headers: {
        authorization: "a1ce3bf4-12b8-45c2-ab0a-cd13960bbeb4",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputsValues),
    });

    cardsContainer.prepend(cardElement);
  },
});

popupAddPost.setEventListeners();

const postAddFormValidator = new FormValidator(
  validationConfig,
  popupAddPost.formElement
);
postAddFormValidator.enableValidation();

buttonAddPost.addEventListener("click", () => {
  popupAddPost.open();
  popupAddPost.formElement.reset();
  postAddFormValidator.resetValidation();
});

// --- Popup Preview

export const popupPreview = new PopupWithImage("#popup-image");

popupPreview.setEventListeners();

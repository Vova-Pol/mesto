/**
 * Token: a1ce3bf4-12b8-45c2-ab0a-cd13960bbeb4
 * ID: cohort-52
 */

// Css import
import "./index.css";

// Constants import
import {
  cardsContainer,
  buttonEdit,
  nameInput,
  occupationInput,
  buttonAddPost,
  validationConfig,
} from "../utils/constants.js";

// Utils import
import { createCard } from "../utils/utils.js";
import { patchData } from "../utils/utils.js";

// Components import
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";

// --- Add cards from the box

const cardsDataRequestURL = "https://mesto.nomoreparties.co/v1/cohort-52/cards";

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

const userData = {};

fetch(userInfoRequestURL, {
  headers: {
    authorization: "a1ce3bf4-12b8-45c2-ab0a-cd13960bbeb4",
  },
})
  .then((res) => res.json())
  .then((data) => {
    userData.name = data.name;
    userData.about = data.about;
    userData.avatar = data.avatar;
    userData._id = data._id;

    userInfoElement.setUserInfo(userData);
    userInfoElement.setUserAvatar(userData);
  })
  .catch((err) => {
    console.log("Что-то пошло не так:" + err);
  });

// --- Popup Edit Profile

const popupEdit = new PopupWithForm("#popup-edit", {
  handleSubmitForm: (inputsValues) => {
    popupEdit.showRendering();
    userInfoElement.setUserInfo(inputsValues);
    patchData(userInfoRequestURL, inputsValues);
    popupEdit.hideRendering("Сохранить");
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

// --- Popup Edit Avatar
const buttonEditAvatar = document.querySelector(
  ".profile__edit-icon-container"
);

const editAvatarRequestURL =
  "https://mesto.nomoreparties.co/v1/cohort-52/users/me/avatar";

const popupEditAvatar = new PopupWithForm("#popup-avatar-image", {
  handleSubmitForm: (inputsValues) => {
    popupEditAvatar.showRendering();
    patchData(editAvatarRequestURL, inputsValues);
    userInfoElement.setUserAvatar(inputsValues);
    popupEditAvatar.hideRendering("Сохранить");
  },
});

popupEditAvatar.setEventListeners();

// --- Edit Avatar Form Validator

const editAvatarFormValidator = new FormValidator(
  validationConfig,
  popupEditAvatar.formElement
);
editAvatarFormValidator.enableValidation();

buttonEditAvatar.addEventListener("click", () => {
  popupEditAvatar.open();
  popupEditAvatar.formElement.reset();
  editAvatarFormValidator.resetValidation();
});

// --- Popup Add Post

const popupAddPost = new PopupWithForm("#popup-add-post", {
  handleSubmitForm: (inputsValues) => {
    popupAddPost.showRendering();

    const cardData = {};
    cardData.name = inputsValues.name;
    cardData.link = inputsValues.link;
    cardData.likes = [];
    cardData.owner = userData;

    const cardElement = createCard(cardData, "#place-card");

    fetch("https://mesto.nomoreparties.co/v1/cohort-52/cards", {
      method: "POST",
      headers: {
        authorization: "a1ce3bf4-12b8-45c2-ab0a-cd13960bbeb4",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputsValues),
    });

    popupAddPost.hideRendering("Создать");
    cardsContainer.prepend(cardElement);
  },
});

popupAddPost.setEventListeners();

// --- Add Post Form Validator

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

export { userData };

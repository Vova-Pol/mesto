/**
 * Token: a1ce3bf4-12b8-45c2-ab0a-cd13960bbeb4
 * ID: cohort-52
 *
 * URLs:
 * https://mesto.nomoreparties.co/v1/cohort-52/
 * https://mesto.nomoreparties.co/v1/cohort-52/cards
 * https://mesto.nomoreparties.co/v1/cohort-52/users/me/
 * https://mesto.nomoreparties.co/v1/cohort-52/users/me/avatar
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
  buttonEditAvatar,
  validationConfig,
  apiConfig,
} from "../utils/constants.js";

// Utils import
import { createCard } from "../utils/utils.js";

// Components import
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";

// --- API

export const api = new Api(apiConfig);

// --- Add cards from the box

api
  .getInitialCards()
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else console.log("Ошибка: " + res.status);
  })
  .then((cardsData) => {
    const cardsList = new Section(
      {
        renderer: (itemData) => {
          const card = createCard(itemData, "#place-card");
          cardsList.addItem(card);
        },
      },
      ".elements__list"
    );

    cardsList.renderItems(cardsData);
  })
  .catch((err) => {
    console.log("Что-то пошло не так: " + err);
  });

// --- User Info

const userInfoElement = new UserInfo({
  userNameSelector: ".profile__name",
  userOccupationSelector: ".profile__occupation",
  userAvatarSelector: ".profile__picture",
});

const userData = {};

api
  .getUserInfo()
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      console.log("Ошибка: " + res.status);
    }
  })
  .then((data) => {
    userData.name = data.name;
    userData.about = data.about;
    userData.avatar = data.avatar;
    userData._id = data._id;

    userInfoElement.setUserInfo(userData);
    userInfoElement.setUserAvatar(userData);
  })
  .catch((err) => {
    console.log("Что-то пошло не так: " + err);
  });

// --- Popup Edit Profile

const popupEdit = new PopupWithForm("#popup-edit", {
  handleSubmitForm: (inputsValues) => {
    popupEdit.showRendering();
    userInfoElement.setUserInfo(inputsValues);
    api.sendRequest("users/me", "PATCH", inputsValues);
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

const popupEditAvatar = new PopupWithForm("#popup-avatar-image", {
  handleSubmitForm: (inputsValues) => {
    popupEditAvatar.showRendering();
    api.sendRequest("users/me/avatar", "PATCH", inputsValues);
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

    api.sendRequest("cards", "POST", inputsValues);

    cardsContainer.prepend(cardElement);
    popupAddPost.hideRendering("Создать");
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

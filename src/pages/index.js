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

// Components import
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupConfirm } from "../components/PopupConfirm.js";
import { Card } from "../components/Card.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";

// --- API

export const api = new Api(apiConfig);

// Create a Card Function

function createCard({ name, link, likes, _id, owner }, templateSelector) {
  const card = new Card({ name, link, likes, _id, owner }, templateSelector, {
    handleCardClick: () => {
      popupPreview.open(link, name);
    },
    putLikeRequest: (urlEnding) => {
      return api.sendRequest(urlEnding, "PUT", userData);
    },
    deleteLikeRequest: (urlEnding) => {
      return api.sendRequest(urlEnding, "DELETE", userData);
    },
    handleDeleteButton: (cardId, cardElement) => {
      popupDeleteCard.setCardData(cardId, cardElement);
      popupDeleteCard.addSubmitListener();
      popupDeleteCard.open();
    },
  });
  return card.generateCard();
}

// --- Popup Delete Confirm

const popupDeleteCard = new PopupConfirm("#popup-delete-card", {
  handleSubmit: (cardId, cardElement) => {
    api.sendRequest(`cards/${cardId}`, "DELETE").then(() => {
      cardElement.remove();
      cardElement = null;
      popupDeleteCard.close();
      popupDeleteCard.removeSubmitListener();
    });
  },
});

popupDeleteCard.setEventListeners();

// --- Add cards from the box

api.getInitialCards().then((cardsData) => {
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
});

// --- User Info

const userInfoElement = new UserInfo({
  userNameSelector: ".profile__name",
  userOccupationSelector: ".profile__occupation",
  userAvatarSelector: ".profile__picture",
});

const userData = {};

api.getUserInfo().then((data) => {
  userData.name = data.name;
  userData.about = data.about;
  userData.avatar = data.avatar;
  userData._id = data._id;

  userInfoElement.setUserInfo(userData);
  userInfoElement.setUserAvatar(userData);
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
  handleSubmitForm: async (inputsValues) => {
    popupAddPost.showRendering();

    const cardData = {};
    cardData.name = inputsValues.name;
    cardData.link = inputsValues.link;
    cardData.likes = [];
    cardData.owner = userData;

    const respond = await api.sendRequest("cards", "POST", inputsValues);
    cardData._id = respond._id;

    const cardElement = createCard(cardData, "#place-card");

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

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
      return api.sendRequest(urlEnding, "PUT", userData).catch((err) => {
        console.error(err);
      });
    },
    deleteLikeRequest: (urlEnding) => {
      return api.sendRequest(urlEnding, "DELETE", userData).catch((err) => {
        console.error(err);
      });
    },
    handleDeleteButton: (cardId) => {
      popupDeleteCard.setCardData(cardId, card);
      popupDeleteCard.addSubmitListener();
      popupDeleteCard.open();
    },
  });
  return card.generateCard();
}

// --- Popup Delete Confirm

const popupDeleteCard = new PopupConfirm("#popup-delete-card", {
  handleSubmit: (cardId, card) => {
    api
      .sendRequest(`cards/${cardId}`, "DELETE")
      .then(() => {
        card.removeCardElement();
        popupDeleteCard.close();
      })
      .catch((err) => {
        console.error(err);
      });
  },
});

popupDeleteCard.setEventListeners();

// --- User Info

const userInfoElement = new UserInfo({
  userNameSelector: ".profile__name",
  userOccupationSelector: ".profile__occupation",
  userAvatarSelector: ".profile__picture",
});

// --- Cards List

const cardsList = new Section(
  {
    renderer: (itemData) => {
      const card = createCard(itemData, "#place-card");
      cardsList.appendItem(card);
    },
  },
  ".elements__list"
);

// --- Request User Data and Cards Data

const userData = {};

api
  .requestUserInfo()
  .then((data) => {
    userData.name = data.name;
    userData.about = data.about;
    userData.avatar = data.avatar;
    userData._id = data._id;

    userInfoElement.setUserInfo(userData);
    userInfoElement.setUserAvatar(userData);
  })
  .then(() => {
    api
      .requestInitialCards()
      .then((cardsData) => {
        cardsList.renderItems(cardsData);
      })
      .catch((err) => {
        console.error(err);
      });
  })
  .catch((err) => {
    console.error(err);
  });

// --- Popup Edit Profile

const popupEdit = new PopupWithForm("#popup-edit", {
  handleSubmitForm: (inputsValues) => {
    popupEdit.showRendering();
    api
      .sendRequest("users/me", "PATCH", inputsValues)
      .then(() => {
        userInfoElement.setUserInfo(inputsValues);
        popupEdit.close();
      })
      .catch((err) => {
        console.error(err);
      });
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
    api
      .sendRequest("users/me/avatar", "PATCH", inputsValues)
      .then(() => {
        userInfoElement.setUserAvatar(inputsValues);
        popupEditAvatar.close();
      })
      .catch((err) => {
        console.error(err);
      });

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
    try {
      popupAddPost.showRendering();

      const cardData = {};
      cardData.name = inputsValues.name;
      cardData.link = inputsValues.link;
      cardData.likes = [];
      cardData.owner = userData;

      const respond = await api.sendRequest("cards", "POST", inputsValues);
      cardData._id = respond._id;

      const cardElement = createCard(cardData, "#place-card");
      cardsList.prependItem(cardElement);

      popupAddPost.close();
      popupAddPost.hideRendering("Создать");
    } catch (err) {
      console.error(err);
    }
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

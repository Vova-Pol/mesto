import "./pages/index.css";

import { cardsData } from "./scripts/utils/cards-data.js";
import {
  FormValidator,
  validationConfig,
} from "./scripts/components/FormValidator.js";
import { Card } from "./scripts/components/Card.js";
import { Section } from "./scripts/components/Section.js";
import { PopupWithForm } from "./scripts/components/PopupWithForm.js";
import { PopupWithImage } from "./scripts/components/PopupWithImage.js";
import { UserInfo } from "./scripts/components/UserInfo.js";

const page = document.querySelector(".page");
const cardsContainer = page.querySelector(".elements__list");

/** Create a Card Func */

function createCard(cardData, templateSelector) {
  const card = new Card(cardData, templateSelector, {
    handleCardClick: () => {
      popupPreview.open(cardData.link, cardData.name);
    },
  });
  return card.generateCard();
}

/** Add cards from the box */

const cardsList = new Section(
  {
    items: cardsData,
    renderer: (item) => {
      const cardElement = new Card(item, "#place-card", {
        handleCardClick: () => {
          popupPreview.open(item.link, item.name);
        },
      });
      const card = cardElement.generateCard();
      cardsList.addItem(card);
    },
  },
  ".elements__list"
);

cardsList.renderItems();

// --- User Info

const userInfoElement = new UserInfo({
  userNameSelector: ".profile__name",
  userOccupationSelector: ".profile__occupation",
});

// --- Popup Edit Profile

const popupEdit = new PopupWithForm("#popup-edit", {
  handleSubmitForm: (evt) => {
    evt.preventDefault();

    const valuesArray = popupEdit._getInputsValues();

    userInfoElement.setUserInfo(valuesArray[0], valuesArray[1]);

    popupEdit.close();
  },
});

popupEdit.setEventListeners();

const profileEditFormValidator = new FormValidator(
  validationConfig,
  popupEdit.formElement
);

profileEditFormValidator.enableValidation();

const buttonEdit = page.querySelector(".profile__edit-button");
const nameInput = popupEdit.formElement.querySelector("#profile-name-input");
const occupationInput = popupEdit.formElement.querySelector(
  "#profile-occupation-input"
);

buttonEdit.addEventListener("click", () => {
  const userData = userInfoElement.getUserInfo();

  nameInput.value = userData.name;
  occupationInput.value = userData.occupation;

  profileEditFormValidator.resetValidation();
  popupEdit.open();
});

// --- Popup Add Post

const popupAddPost = new PopupWithForm("#popup-add-post", {
  handleSubmitForm: (evt) => {
    evt.preventDefault();

    const valuesArray = popupAddPost._getInputsValues();
    const cardData = {
      name: valuesArray[0],
      link: valuesArray[1],
    };

    const cardElement = createCard(cardData, "#place-card", {
      handleCardClick: () => {
        popupPreview.open(cardData.link, cardData.name);
      },
    });

    cardsContainer.prepend(cardElement);
    popupAddPost.close();
  },
});

popupAddPost.setEventListeners();

const postAddFormValidator = new FormValidator(
  validationConfig,
  popupAddPost.formElement
);
postAddFormValidator.enableValidation();

const buttonAddPost = page.querySelector(".profile__add-button");

buttonAddPost.addEventListener("click", () => {
  popupAddPost.open();
  popupAddPost.formElement.reset();
  postAddFormValidator.resetValidation();
});

// --- Popup Preview

const popupPreview = new PopupWithImage("#popup-image");

popupPreview.setEventListeners();

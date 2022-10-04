import { cardsData } from "../utils/cards-data.js";
import {
  FormValidator,
  validationConfig,
} from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithImage, PopupWithForm } from "../components/Popup.js";

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

/*
cardsData.forEach((cardData) => {
  const cardElement = createCard(cardData, "#place-card");
  cardsContainer.prepend(cardElement);
});
*/

/* Open Popup Func */

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscButton);
}

/* Close Popup Func */

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscButton);
}

/* ----- Esc Button Close Popup ----- */

function handleEscButton(evt) {
  if (evt.key === "Escape") {
    const openedPopup = page.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

/* ----- Popup Edit Profile ----- */

const popupEdit = page.querySelector("#popup-edit");

const nameInput = popupEdit.querySelector("#profile-name-input");
const occupationInput = popupEdit.querySelector("#profile-occupation-input");

const profileName = page.querySelector(".profile__name");
const profileOccupation = page.querySelector(".profile__occupation");

const buttonEdit = page.querySelector(".profile__edit-button");

buttonEdit.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  occupationInput.value = profileOccupation.textContent;
  openPopup(popupEdit);
  profileEditFormValidator.resetValidation();
});

const popupEditCloseButton = popupEdit.querySelector(".popup__close-button");

popupEditCloseButton.addEventListener("click", () => {
  closePopup(popupEdit);
});

/** Edit Profile Form */

const profileEditForm = document.querySelector("#edit-profile-form");
const profileEditFormValidator = new FormValidator(
  validationConfig,
  profileEditForm
);
profileEditFormValidator.enableValidation();

function handleProfileEditFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileOccupation.textContent = occupationInput.value;

  closePopup(popupEdit);
}

profileEditForm.addEventListener("submit", handleProfileEditFormSubmit);

/* ----- Popup Add Post ----- */

//const popupAddPost = page.querySelector("#popup-add-post");

//const popupAddPostCloseButton = popupAddPost.querySelector(
//  ".popup__close-button"
//);

/*popupAddPostCloseButton.addEventListener("click", () => {
  closePopup(popupAddPost);
});

buttonAddPost.addEventListener("click", () => {
  postAddForm.reset();
  openPopup(popupAddPost);
  postAddFormValidator.resetValidation();
});*/

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

const buttonAddPost = page.querySelector(".profile__add-button");

buttonAddPost.addEventListener("click", () => {
  popupAddPost.open();
});

/** Add Post Form */
/*const postAddForm = document.querySelector("#add-post-form");
const postAddFormValidator = new FormValidator(validationConfig, postAddForm);
postAddFormValidator.enableValidation();

const placeNameInput = popupAddPost.querySelector("#place-name-input");
const placeLinkInput = popupAddPost.querySelector("#place-link-input");

function handlePostAddFormSubmit(evt) {
  evt.preventDefault();

  const placeCardData = {
    name: placeNameInput.value,
    link: placeLinkInput.value,
  };

  const cardElement = createCard(placeCardData, "#place-card");
  cardsContainer.prepend(cardElement);

  closePopup(popupAddPost);
}

postAddForm.addEventListener("submit", handlePostAddFormSubmit);*/

/* ----- Popup Preview ----- */

const popupPreview = new PopupWithImage("#popup-image");
popupPreview.setEventListeners();

/* ----- Overlay Close Popup ----- */

const popupsList = Array.from(page.querySelectorAll(".popup"));

function handleClosePopupByOverlay(popup, evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(popup);
  }
}

popupsList.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    handleClosePopupByOverlay(popup, evt);
  });
});

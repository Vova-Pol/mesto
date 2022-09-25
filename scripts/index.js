import { cardsData } from "./cards-data.js";
import { Card } from "./Card.js";
import { FormValidator, validationConfig } from "./FormValidator.js";

const page = document.querySelector(".page");
const cardsContainer = page.querySelector(".elements__list");

cardsData.forEach((elem) => {
  const card = new Card(elem, "#place-card");
  const cardElement = card.generateCard();
  cardsContainer.prepend(cardElement);
});

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

const editButton = page.querySelector(".profile__edit-button");

editButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  occupationInput.value = profileOccupation.textContent;
  openPopup(popupEdit);
  editProfileForm.resetValidation();
});

const popupEditCloseButton = popupEdit.querySelector(".popup__close-button");

popupEditCloseButton.addEventListener("click", () => {
  closePopup(popupEdit);
});

/** Edit Profile Form */

const editProfileFormElement = document.querySelector("#edit-profile-form");
const editProfileForm = new FormValidator(
  validationConfig,
  editProfileFormElement
);
editProfileForm.enableValidation();

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileOccupation.textContent = occupationInput.value;

  closePopup(popupEdit);
}

editProfileFormElement.addEventListener("submit", handleEditProfileFormSubmit);

/* ----- Popup Add Post ----- */

const popupAddPost = page.querySelector("#popup-add-post");
const addPostButton = page.querySelector(".profile__add-button");
const popupAddPostCloseButton = popupAddPost.querySelector(
  ".popup__close-button"
);

popupAddPostCloseButton.addEventListener("click", () => {
  closePopup(popupAddPost);
});

addPostButton.addEventListener("click", () => {
  addPostFormElement.reset();
  openPopup(popupAddPost);
  addPostForm.resetValidation();
});

/** Add Post Form */
const addPostFormElement = document.querySelector("#add-post-form");
const addPostForm = new FormValidator(validationConfig, addPostFormElement);
addPostForm.enableValidation();

const placeNameInput = popupAddPost.querySelector("#place-name-input");
const placeLinkInput = popupAddPost.querySelector("#place-link-input");

function handleAddPostFormSubmit(evt) {
  evt.preventDefault();

  const placeCardData = {
    name: placeNameInput.value,
    link: placeLinkInput.value,
  };
  const card = new Card(placeCardData, "#place-card");
  const cardElement = card.generateCard();

  cardsContainer.prepend(cardElement);
  closePopup(popupAddPost);
}

addPostFormElement.addEventListener("submit", handleAddPostFormSubmit);

/* ----- Popup Preview ----- */

const popupPreview = page.querySelector("#popup-image");

const popupImg = popupPreview.querySelector(".popup__image");
const popupSubtitle = popupPreview.querySelector(".popup__subtitle");

const popupPreviewCloseButton = popupPreview.querySelector(
  ".popup__close-button"
);

popupPreviewCloseButton.addEventListener("click", () => {
  closePopup(popupPreview);
});

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

export { openPopup, popupPreview, popupImg, popupSubtitle };

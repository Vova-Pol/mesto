const page = document.querySelector(".page");

const placeCardTemplateContent = page.querySelector("#place-card").content;
const placeCardTemplate =
  placeCardTemplateContent.querySelector(".elements__item");
const cardsContainer = page.querySelector(".elements__list");

function buttonStateToggle(evt, className) {
  evt.target.classList.toggle(className);
}

function cloneCardTemplate(cardData) {
  const placeCardElement = placeCardTemplate.cloneNode(true);

  const likeButton = placeCardElement.querySelector(".elements__like-button");

  likeButton.addEventListener("click", (evt) => {
    buttonStateToggle(evt, "elements__like-button_active");
  });

  const deleteButton = placeCardElement.querySelector(
    ".elements__delete-button"
  );

  deleteButton.addEventListener("click", () => {
    placeCardElement.remove();
  });

  const cardImage = placeCardElement.querySelector(".elements__image");
  const cardTitle = placeCardElement.querySelector(".elements__title");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardImage.addEventListener("click", () => {
    popupImg.src = cardData.link;
    popupImg.alt = cardData.name;
    popupSubtitle.textContent = cardData.name;
    openPopup(popupImage);
  });

  return placeCardElement;
}

function addCardsFromBox(cards) {
  cards.forEach((card) => {
    const placeCardElement = cloneCardTemplate(card);
    cardsContainer.prepend(placeCardElement);
  });
}

addCardsFromBox(cardsFromBox);

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

const popupEditInputsList = Array.from(popupEdit.querySelectorAll("input"));
const popupEditSubmitButton = popupEdit.querySelector(".popup__save-button");
const popupEditForm = popupEdit.querySelector("form");

editButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  occupationInput.value = profileOccupation.textContent;
  openPopup(popupEdit);
  resetValidation(popupEditInputsList, popupEditSubmitButton, popupEditForm);
});

const popupEditCloseButton = popupEdit.querySelector(".popup__close-button");

popupEditCloseButton.addEventListener("click", () => {
  closePopup(popupEdit);
});

const editProfileForm = document.forms.editProfileForm;

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileOccupation.textContent = occupationInput.value;

  closePopup(popupEdit);
}

editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);

/* ----- Popup Add Post ----- */

const popupAddPost = page.querySelector("#popup-add-post");

const addPostButton = page.querySelector(".profile__add-button");

const popupAddPostInputsList = Array.from(
  popupAddPost.querySelectorAll("input")
);
const popupAddPostSubmitButton = popupAddPost.querySelector(
  ".popup__save-button"
);
const popupAddPostForm = popupAddPost.querySelector("form");

addPostButton.addEventListener("click", () => {
  popupAddPostForm.reset();
  openPopup(popupAddPost);
  resetValidation(
    popupAddPostInputsList,
    popupAddPostSubmitButton,
    popupAddPostForm
  );
});

const popupAddPostCloseButton = popupAddPost.querySelector(
  ".popup__close-button"
);

popupAddPostCloseButton.addEventListener("click", () => {
  closePopup(popupAddPost);
});

const placeNameInput = popupAddPost.querySelector("#place-name-input");
const placeLinkInput = popupAddPost.querySelector("#place-link-input");

const addFormElement = popupAddPost.querySelector(".popup__form");

function handleAddPostFormSubmit(evt) {
  evt.preventDefault();

  const placeCardData = {
    name: placeNameInput.value,
    link: placeLinkInput.value,
  };
  const placeCardElement = cloneCardTemplate(placeCardData);

  cardsContainer.prepend(placeCardElement);
  closePopup(popupAddPost);
}

addFormElement.addEventListener("submit", handleAddPostFormSubmit);

/* ----- Popup Image ----- */

const popupImage = page.querySelector("#popup-image");

const popupImg = popupImage.querySelector(".popup__image");
const popupSubtitle = popupImage.querySelector(".popup__subtitle");

const popupImageCloseButton = popupImage.querySelector(".popup__close-button");

popupImageCloseButton.addEventListener("click", () => {
  closePopup(popupImage);
});

/* ----- Overlay Close Popup ----- */

const popupsList = Array.from(page.querySelectorAll(".popup"));

popupsList.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    handleClosePopupByOverlay(popup, evt);
  });
});

function handleClosePopupByOverlay(popup, evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(popup);
  }
}

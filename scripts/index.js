const page = document.querySelector(".page");

const placeCardTemplate = page.querySelector("#place-card").content;

const cardsList = page.querySelector(".elements__list");

function cloneCardTemplate(imgLink, imgName) {
  const placeCardElement = placeCardTemplate
    .querySelector(".elements__item")
    .cloneNode(true);

  const likeButton = placeCardElement.querySelector(".elements__like-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("elements__like-button_active");
  });

  const deleteButton = placeCardElement.querySelector(
    ".elements__delete-button"
  );

  deleteButton.addEventListener("click", () => {
    const placeCard = deleteButton.closest(".elements__item");
    placeCard.remove();
  });

  const cardImage = placeCardElement.querySelector(".elements__image");
  const cardTitle = placeCardElement.querySelector(".elements__title");

  cardImage.src = imgLink;
  cardImage.alt = imgName;
  cardTitle.textContent = imgName;

  cardImage.addEventListener("click", (evt) => {
    const cardImg = evt.target;
    popupImg.src = cardImg.src;
    popupImg.alt = cardImg.alt;
    popupSubtitle.textContent = cardImg.alt;
    openPopup(popupImage);
  });

  return placeCardElement;
}

function addCardsFromBox(cards) {
  for (let i = 0; i < cards.length; i++) {
    const placeCardElement = cloneCardTemplate(cards[i].link, cards[i].name);

    cardsList.prepend(placeCardElement);
  }
}

addCardsFromBox(cardsFromBox);

/* Open Popup Func */

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

/* Close Popup Func */

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

/* ----- Popup Edit Profile ----- */

const popupEdit = page.querySelector("#popup-edit");

const nameInput = popupEdit.querySelector("#popup-edit-name");
const occupationInput = popupEdit.querySelector("#popup-edit-occupation");

const profileName = page.querySelector(".profile__name");
const profileOccupation = page.querySelector(".profile__occupation");

const editButton = page.querySelector(".profile__edit-button");

editButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  occupationInput.value = profileOccupation.textContent;
  openPopup(popupEdit);
});

const popupEditCloseButton = popupEdit.querySelector(".popup__close-button");

popupEditCloseButton.addEventListener("click", () => {
  closePopup(popupEdit);
});

const editProfileForm = document.forms.editProfileForm;

function editProfileFormSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileOccupation.textContent = occupationInput.value;

  closePopup(popupEdit);
}

editProfileForm.addEventListener("submit", editProfileFormSubmitHandler);

/* ----- Popup Add Post ----- */

const popupAddPost = page.querySelector("#popup-add-post");

const addPostButton = page.querySelector(".profile__add-button");

addPostButton.addEventListener("click", () => {
  popupAddPost.querySelector("#add-post-form").reset();
  openPopup(popupAddPost);
});

const popupAddPostCloseButton = popupAddPost.querySelector(
  ".popup__close-button"
);

popupAddPostCloseButton.addEventListener("click", () => {
  closePopup(popupAddPost);
});

const placeNameInput = popupAddPost.querySelector("#popup-place-name");
const placeLinkInput = popupAddPost.querySelector("#popup-place-link");

const addFormElement = popupAddPost.querySelector(".popup__form");

function addFormSubmitHandler(evt) {
  evt.preventDefault();

  const placeCardElement = cloneCardTemplate(
    placeLinkInput.value,
    placeNameInput.value
  );

  cardsList.prepend(placeCardElement);
  closePopup(popupAddPost);
}

addFormElement.addEventListener("submit", addFormSubmitHandler);

/* ----- Popup Image ----- */

const popupImage = page.querySelector("#popup-image");

const popupImg = popupImage.querySelector(".popup__image");
const popupSubtitle = popupImage.querySelector(".popup__subtitle");

const popupImageCloseButton = popupImage.querySelector(".popup__close-button");

popupImageCloseButton.addEventListener("click", () => {
  closePopup(popupImage);
});

/* ----- Edit Profile Form Validation ----- */

const profileNameInput = editProfileForm.profileNameInput;
const profileOccupationInput = editProfileForm.profileOccupationInput;

const profileInputList = editProfileForm.querySelectorAll("input");

function showInputError(inputElem) {
  inputElem.classList.add("popup__input_type_error");
}

function hideInputError(inputElem) {
  inputElem.classList.remove("popup__input_type_error");
}

function isInputValid(inputElem) {
  if (inputElem.validity.valid) {
    hideInputError(inputElem);
  } else {
    showInputError(inputElem);
  }
}

profileInputList.forEach((inputElem) => {
  inputElem.addEventListener("input", () => {
    isInputValid(inputElem);
  });
});

const page = document.querySelector(".page");

const placeCardTemplate = page.querySelector("#place-card").content;

const cardsList = page.querySelector(".elements__list");

function cloneCardTemplate() {
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

  return placeCardElement;
}

function addCardsFromBox(cards) {
  for (let i = 0; i < cards.length; i++) {
    const placeCardElement = cloneCardTemplate();

    placeCardElement.querySelector(".elements__image").src =
      cardsFromBox[i].link;
    placeCardElement.querySelector(".elements__image").alt =
      cardsFromBox[i].name;
    placeCardElement.querySelector(".elements__title").textContent =
      cardsFromBox[i].name;

    cardsList.prepend(placeCardElement);
  }
}

addCardsFromBox(cardsFromBox);

/* ----- Popup Edit: Open/Close Function ----- */

const popupEdit = page.querySelector("#popup-edit");

const editButton = page.querySelector(".profile__edit-button");
const nameInput = page.querySelector("#popup-edit-name");
const occupationInput = page.querySelector("#popup-edit-occupation");
const profileName = page.querySelector(".profile__name");
const profileOccupation = page.querySelector(".profile__occupation");

function openPopupEdit() {
  nameInput.value = profileName.textContent;
  occupationInput.value = profileOccupation.textContent;

  popupEdit.classList.add("popup_opened");
}

editButton.addEventListener("click", openPopupEdit);

const popupEditCloseButton = popupEdit.querySelector(".popup__close-button");

function closePopupEdit() {
  popupEdit.classList.remove("popup_opened");
}

popupEditCloseButton.addEventListener("click", closePopupEdit);

/* ----- Popup Edit: Edit Profile Function ----- */

const editFormElement = popupEdit.querySelector(".popup__container");

function editFormSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileOccupation.textContent = occupationInput.value;

  closePopupEdit();
}

editFormElement.addEventListener("submit", editFormSubmitHandler);

/* ----- Popup Add Post: Open/Close Function ----- */

const popupAddPost = page.querySelector("#popup-add-post");

function openPopupAddPost() {
  placeNameInput.value = "";
  placeLinkInput.value = "";
  popupAddPost.classList.add("popup_opened");
}

const addPostButton = page.querySelector(".profile__add-button");

addPostButton.addEventListener("click", openPopupAddPost);

function closePopupAddPost() {
  popupAddPost.classList.remove("popup_opened");
}

const popupAddPostCloseButton = popupAddPost.querySelector(
  ".popup__close-button"
);

popupAddPostCloseButton.addEventListener("click", closePopupAddPost);

/* ----- Popup Add Post: Add Post Function ----- */

const placeNameInput = popupAddPost.querySelector("#popup-place-name");
const placeLinkInput = popupAddPost.querySelector("#popup-place-link");

const addFormElement = popupAddPost.querySelector(".popup__container");

function addFormSubmitHandler(evt) {
  evt.preventDefault();

  const placeCardElement = cloneCardTemplate();

  placeCardElement.querySelector(".elements__image").src = placeLinkInput.value;
  placeCardElement.querySelector(".elements__image").alt = placeNameInput.value;
  placeCardElement.querySelector(".elements__title").textContent =
    placeNameInput.value;

  cardsList.prepend(placeCardElement);
  closePopupAddPost();
}

addFormElement.addEventListener("submit", addFormSubmitHandler);

/* ----- Popup Image: Open/Close Function ----- */

const popupImage = page.querySelector("#popup-image");

function openPopupImage(evt) {
  const cardImg = evt.target;
  const popupImg = popupImage.querySelector(".popup__image");
  const popupSubtitle = popupImage.querySelector(".popup__subtitle");

  popupImg.src = cardImg.src;
  popupImg.alt = cardImg.alt;
  popupSubtitle.textContent = cardImg.alt;

  popupImage.classList.add("popup_opened");
}

const cardsImages = page.querySelectorAll(".elements__image");

cardsImages.forEach(function (img) {
  img.addEventListener("click", openPopupImage);
});

function closePopupImage() {
  popupImage.classList.remove("popup_opened");
}

const popupImageCloseButton = popupImage.querySelector(".popup__close-button");

popupImageCloseButton.addEventListener("click", closePopupImage);

const page = document.querySelector(".page");

/* ----- Cards "from the box" ----- */

const cardsFromBox = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const placeCardTemplate = page.querySelector("#place-card").content;

const cardsList = page.querySelector(".elements__list");

function addCardsFromBox(cards) {
  for (let i = 0; i < cards.length; i++) {
    let placeCardElement = placeCardTemplate
      .querySelector(".elements__item")
      .cloneNode(true);

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

const popupEdit = document.getElementById("popup-edit");

const editButton = page.querySelector(".profile__edit-button");
const nameInput = document.getElementById("popup__input_type_name");
const occupationInput = document.getElementById("popup__input_type_occupation");
const profileName = page.querySelector(".profile__name");
const profileOccupation = page.querySelector(".profile__occupation");

function popupEditOpen() {
  nameInput.value = profileName.textContent;
  occupationInput.value = profileOccupation.textContent;

  popupEdit.classList.add("popup_opened");
}

editButton.addEventListener("click", popupEditOpen);

const popupEditCloseButton = popupEdit.querySelector(".popup__close-button");

function popupEditClose() {
  popupEdit.classList.remove("popup_opened");
}

popupEditCloseButton.addEventListener("click", popupEditClose);

/* ----- Popup Edit: Edit Profile Function ----- */

const editFormElement = popupEdit.querySelector(".popup__container");

function editFormSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileOccupation.textContent = occupationInput.value;

  popupEditClose();
}

editFormElement.addEventListener("submit", editFormSubmitHandler);

/* ----- Popup Add Post: Open/Close Function ----- */

const popupAddPost = page.querySelector("#popup-add-post");

function popupAddPostOpen() {
  placeNameInput.value = "";
  placeLinkInput.value = "";
  popupAddPost.classList.add("popup_opened");
}

const addPostButton = page.querySelector(".profile__add-button");

addPostButton.addEventListener("click", popupAddPostOpen);

function popupAddPostClose() {
  popupAddPost.classList.remove("popup_opened");
}

const popupAddPostCloseButton = popupAddPost.querySelector(
  ".popup__close-button"
);

popupAddPostCloseButton.addEventListener("click", popupAddPostClose);

/* ----- Popup Add Post: Add Post Function ----- */

const placeNameInput = popupAddPost.querySelector(
  "#popup__input_type_place-name"
);
const placeLinkInput = popupAddPost.querySelector(
  "#popup__input_type_place-link"
);

const addFormElement = popupAddPost.querySelector(".popup__container");

function addFormSubmitHandler(evt) {
  evt.preventDefault();

  let placeCardElement = placeCardTemplate
    .querySelector(".elements__item")
    .cloneNode(true);

  placeCardElement.querySelector(".elements__image").src = placeLinkInput.value;
  placeCardElement.querySelector(".elements__image").alt = placeNameInput.value;
  placeCardElement.querySelector(".elements__title").textContent =
    placeNameInput.value;

  cardsList.prepend(placeCardElement);
  popupAddPostClose();
}

addFormElement.addEventListener("submit", addFormSubmitHandler);

/* ----- Like Button ----- */

const likeButtons = page.querySelectorAll(".elements__like-button");

likeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("elements__like-button_active");
  });
});

let page = document.querySelector(".page");
let popup = page.querySelector(".popup");

let editButton = page.querySelector(".profile__edit-button");

function popupOpen() {
  popup.classList.add("popup_opened");
}

editButton.addEventListener("click", popupOpen);

let closeButton = page.querySelector(".popup__close-button");

function popupClose() {
  popup.classList.remove("popup_opened");
}

closeButton.addEventListener("click", popupClose);

let profileName = page.querySelector(".profile__name");
let profileOccupation = page.querySelector(".profile__occupation");

let formElement = popup.querySelector(".popup__container");
let nameInput = popup.querySelector(".popup__input-name");
let occupationInput = popup.querySelector(".popup__input-occupation");

nameInput.value = profileName.textContent;
occupationInput.value = profileOccupation.textContent;

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileOccupation.textContent = occupationInput.value;

  popupClose();
}

formElement.addEventListener("submit", formSubmitHandler);

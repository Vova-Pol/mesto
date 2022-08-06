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

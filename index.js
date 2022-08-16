const page = document.querySelector(".page");

/* ---------- Popup Edit Profile ---------- */

const popupEdit = document.getElementById("popup-edit");

const editButton = page.querySelector(".profile__edit-button");
const nameInput = popupEdit.querySelector(".popup__input_type_name");
const occupationInput = popupEdit.querySelector(
  ".popup__input_type_occupation"
);
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

const formElement = popupEdit.querySelector(".popup__container");

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileOccupation.textContent = occupationInput.value;

  popupEditClose();
}

formElement.addEventListener("submit", formSubmitHandler);

/* ---------- Popup Add Post ---------- */

const popupAddPost = document.getElementById("popup-add-post");

function popupAddPostOpen() {
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

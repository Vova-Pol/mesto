// Css import
import "./index.css";

// Constants import
import {
  cardsData,
  cardsContainer,
  buttonEdit,
  nameInput,
  occupationInput,
  buttonAddPost,
  validationConfig,
} from "../utils/constants.js";

// Utils import
import { createCard } from "../utils/utils.js";

// Components import
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";

// --- Add cards from the box

const cardsList = new Section(
  {
    renderer: (itemData) => {
      const card = createCard(itemData, "#place-card");
      cardsList.addItem(card);
    },
  },
  ".elements__list"
);

cardsList.renderItems(cardsData);

// --- User Info

const userInfoElement = new UserInfo({
  userNameSelector: ".profile__name",
  userOccupationSelector: ".profile__occupation",
});

// --- Popup Edit Profile

const popupEdit = new PopupWithForm("#popup-edit", {
  handleSubmitForm: (inputsValues) => {
    userInfoElement.setUserInfo({
      name: inputsValues.profileNameInput,
      occupation: inputsValues.profileOccupationInput,
    });
  },
});

popupEdit.setEventListeners();

const profileEditFormValidator = new FormValidator(
  validationConfig,
  popupEdit.formElement
);

profileEditFormValidator.enableValidation();

buttonEdit.addEventListener("click", () => {
  const userData = userInfoElement.getUserInfo();

  nameInput.value = userData.name;
  occupationInput.value = userData.occupation;

  profileEditFormValidator.resetValidation();
  popupEdit.open();
});

// --- Popup Add Post

const popupAddPost = new PopupWithForm("#popup-add-post", {
  handleSubmitForm: (inputsValues) => {
    const cardElement = createCard(
      {
        name: inputsValues.placeNameInput,
        link: inputsValues.placeLinkInput,
      },
      "#place-card"
    );

    cardsContainer.prepend(cardElement);
  },
});

popupAddPost.setEventListeners();

const postAddFormValidator = new FormValidator(
  validationConfig,
  popupAddPost.formElement
);
postAddFormValidator.enableValidation();

buttonAddPost.addEventListener("click", () => {
  popupAddPost.open();
  popupAddPost.formElement.reset();
  postAddFormValidator.resetValidation();
});

// --- Popup Preview

export const popupPreview = new PopupWithImage("#popup-image");

popupPreview.setEventListeners();

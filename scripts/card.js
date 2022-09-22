import { openPopup, popupImage, popupImg, popupSubtitle } from "./index.js";

export class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
  }

  _getElement() {
    const cardElement = document
      .querySelector("#place-card")
      .content.querySelector(".elements__item")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getElement();

    this._element.querySelector(".elements__image").src = this._link;
    this._element.querySelector(".elements__image").alt = this._name;
    this._element.querySelector(".elements__title").textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".elements__like-button")
      .addEventListener("click", () => {
        this._handleLikeButton();
      });

    this._element
      .querySelector(".elements__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteButton();
      });

    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        this._handleImage();
      });
  }

  _handleLikeButton() {
    this._element
      .querySelector(".elements__like-button")
      .classList.toggle("elements__like-button_active");
  }

  _handleDeleteButton() {
    this._element.remove();
  }

  _handleImage() {
    popupImg.src = this._link;
    popupImg.alt = this._name;
    popupSubtitle.textContent = this._name;
    openPopup(popupImage);
  }
}

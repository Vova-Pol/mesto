import { openPopup, popupPreview, popupImg, popupSubtitle } from "./index.js";

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getElement() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getElement();
    this._elementImage = this._element.querySelector(".elements__image");
    this._buttonLike = this._element.querySelector(".elements__like-button");

    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._element.querySelector(".elements__title").textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._buttonLike.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._element
      .querySelector(".elements__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteButton();
      });

    this._elementImage.addEventListener("click", () => {
      this._handleImage();
    });
  }

  _handleLikeButton() {
    this._buttonLike.classList.toggle("elements__like-button_active");
  }

  _handleDeleteButton() {
    this._element.remove();
    this._element = null;
  }

  _handleImage() {
    popupImg.src = this._link;
    popupImg.alt = this._name;
    popupSubtitle.textContent = this._name;
    openPopup(popupPreview);
  }
}
/** */

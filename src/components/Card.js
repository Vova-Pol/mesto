import { userData } from "../pages/index.js";

export class Card {
  constructor(
    { name, link, likes, _id, owner },
    templateSelector,
    { handleCardClick, putLikeRequest, deleteLikeRequest, handleDeleteButton }
  ) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = _id;
    this._owner = owner;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._putLikeRequest = putLikeRequest;
    this._deleteLikeRequest = deleteLikeRequest;
    this._handleDeleteButton = handleDeleteButton;
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
    this._buttonDelete;

    if (this._isLiked()) {
      this._buttonLike.classList.add("elements__like-button_active");
    }

    this._likesCounter = this._element.querySelector(".elements__like-counter");
    this._likesCounter.textContent = this._likes.length;

    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._element.querySelector(".elements__title").textContent = this._name;

    this._buttonDelete = this._element.querySelector(
      ".elements__delete-button"
    );

    if (userData._id !== this._owner._id) {
      this._buttonDelete.classList.add("elements__delete-button_hidden");
    }

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._buttonLike.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._buttonDelete.addEventListener("click", () => {
      this._handleDeleteButton(this._id);
    });

    this._elementImage.addEventListener("click", () => {
      this._handleCardClick();
    });
  }

  _isLiked() {
    return this._likes.some((obj) => obj._id === userData._id);
  }

  setLike(cardData) {
    this._likes = cardData.likes;
    this._likesCounter.textContent = cardData.likes.length;
    this._buttonLike.classList.toggle("elements__like-button_active");
  }

  _handleLikeButton() {
    const likesRequsetUrlEnding = `cards/${this._id}/likes`;

    if (!this._isLiked()) {
      this._putLikeRequest(likesRequsetUrlEnding);
    } else {
      this._deleteLikeRequest(likesRequsetUrlEnding);
    }
  }

  removeCardElement() {
    this._element.remove();
    this._element = null;
  }
}

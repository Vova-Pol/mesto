import { userData } from "../pages/index.js";
import { PopupConfirm } from "./PopupConfirm.js";
import { api } from "../pages/index.js";

export class Card {
  constructor(
    { name, link, likes, _id, owner },
    templateSelector,
    { handleCardClick }
  ) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = _id;
    this._owner = owner;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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

    this._element
      .querySelector(".elements__delete-button")
      .addEventListener("click", (evt) => {
        this._handleDeleteButton(evt);
      });

    this._elementImage.addEventListener("click", () => {
      this._handleCardClick();
    });
  }

  _isLiked() {
    return this._likes.some((obj) => obj._id === userData._id);
  }

  _isButtonLikeActive() {
    return this._buttonLike.classList.contains("elements__like-button_active");
  }

  _handleLikeButton() {
    const likesRequsetUrlEnding = `cards/${this._id}/likes`;

    if (this._isLiked()) {
      if (this._isButtonLikeActive()) {
        this._likesCounter.textContent = this._likes.length - 1;
        api.sendRequest(likesRequsetUrlEnding, "DELETE", userData);
      } else if (!this._isButtonLikeActive()) {
        this._likesCounter.textContent = this._likes.length;
        api.sendRequest(likesRequsetUrlEnding, "PUT", userData);
      }
    } else if (!this._isLiked()) {
      if (!this._isButtonLikeActive()) {
        this._likesCounter.textContent = this._likes.length + 1;
        api.sendRequest(likesRequsetUrlEnding, "PUT", userData);
      } else if (this._isButtonLikeActive()) {
        this._likesCounter.textContent = this._likes.length;
        api.sendRequest(likesRequsetUrlEnding, "DELETE", userData);
      }
    }

    this._buttonLike.classList.toggle("elements__like-button_active");
  }

  _handleDeleteButton() {
    const popupDeleteCard = new PopupConfirm(
      "#popup-delete-card",
      this._element,
      this._id
    );

    popupDeleteCard.setEventListeners();
    popupDeleteCard.open();
  }
}

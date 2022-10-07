import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._element.querySelector(".popup__image");
    this._subtitle = this._element.querySelector(".popup__subtitle");
  }

  open(imageLink, imageTitle) {
    super.open();

    this._image.src = imageLink;
    this._image.alt = imageTitle;
    this._subtitle.textContent = imageTitle;
  }
}

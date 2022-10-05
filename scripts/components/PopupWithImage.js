import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(imageLink, imageTitle) {
    super.open();

    this._image.src = imageLink;
    this._image.alt = imageTitle;
    this._subtitle.textContent = imageTitle;
  }
}

export class Popup {
  constructor(popupSelector) {
    this._element = document.querySelector(popupSelector);
    this._image = this._element.querySelector(".popup__image");
    this._subtitle = this._element.querySelector(".popup__subtitle");
  }

  open() {
    this._element.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._element.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      //this.close().bind(); --------------- пофиксить!
    }
  }

  setEventListeners() {
    const closeButton = this._element.querySelector(".popup__close-button");

    closeButton.addEventListener("click", () => {
      this.close();
    });

    this._element.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });
  }
}

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

export class Popup {
  constructor(popupSelector) {
    this._element = document.querySelector(popupSelector);
    this._closeButton = this._element.querySelector(".popup__close-button");
    this._handleEscButtonBound = this._handleEscClose.bind(this);
  }

  open() {
    this._element.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscButtonBound);
  }

  close() {
    this._element.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscButtonBound);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this.close();
    });

    this._element.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });
  }
}

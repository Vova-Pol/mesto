export class Popup {
  constructor(popupSelector) {
    this._element = document.querySelector(popupSelector);
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
      //this.close().bind(this._element);
      this.close();
    }
  }

  setEventListeners() {
    const closeButton = this._element.querySelector(".popup__close-button");

    closeButton.addEventListener("click", () => {
      //this.close().bind(this._element);
      this.close();
    });

    this._element.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });
  }
}

export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.append(element);
  }

  renderItems(itemsDataArray) {
    itemsDataArray.forEach((itemData) => {
      this._renderer(itemData);
    });
  }
}

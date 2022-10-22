import { Card } from "../components/Card.js";
import { popupPreview } from "../pages/index.js";

export function createCard({ name, link, likes, _id }, templateSelector) {
  const card = new Card({ name, link, likes, _id }, templateSelector, {
    handleCardClick: () => {
      popupPreview.open(link, name);
    },
  });
  return card.generateCard();
}

export function patchData(url, newData) {
  fetch(url, {
    method: "PATCH",
    headers: {
      authorization: "a1ce3bf4-12b8-45c2-ab0a-cd13960bbeb4",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });
}

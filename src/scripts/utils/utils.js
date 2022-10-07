import { Card } from "../components/Card.js";
import { popupPreview } from "../../index.js";

export function createCard(cardData, templateSelector) {
  const card = new Card(cardData, templateSelector, {
    handleCardClick: () => {
      popupPreview.open(cardData.link, cardData.name);
    },
  });
  return card.generateCard();
}

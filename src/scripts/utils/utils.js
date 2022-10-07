import { Card } from "../components/Card.js";
import { popupPreview } from "../../index.js";

export function createCard({ name, link }, templateSelector) {
  const card = new Card({ name, link }, templateSelector, {
    handleCardClick: () => {
      popupPreview.open(link, name);
    },
  });
  return card.generateCard();
}

import { Card } from "../components/Card.js";
import { popupPreview } from "../pages/index.js";

export function createCard(
  { name, link, likes, _id, owner },
  templateSelector
) {
  const card = new Card({ name, link, likes, _id, owner }, templateSelector, {
    handleCardClick: () => {
      popupPreview.open(link, name);
    },
  });
  return card.generateCard();
}

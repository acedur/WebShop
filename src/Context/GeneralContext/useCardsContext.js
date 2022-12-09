import { useState } from "react";

export const UseCardsContext = () => {
  const [cards, setCards] = useState({});

  const handleCards = (data) => {
    setCards(data);
  };

  return { cards, handleCards };
};

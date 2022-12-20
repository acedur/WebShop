import { useState } from "react";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "./action";

export const useContextDataShop = () => {
  const [shop, setShop] = useState({ products: [] });

  const handleShop = (action, payload) => {
    switch (action) {
      case ADD_PRODUCT:
        setShop({ products: payload.products });
        return;
      case REMOVE_PRODUCT:
        setShop([]);
        return;
    }
  };

  return { shop, handleShop };
};

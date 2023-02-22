import { useState } from "react";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "./action";

export const useContextDataShop = () => {
  const [shop, setShop] = useState({ products: [] });
  const [selectedCategory, setSelectedCategry] = useState([]);

  const handleShop = (action, payload) => {
    switch (action) {
      case ADD_PRODUCT:
        // eslint-disable-next-line no-case-declarations
        const getAllSortedProducts = (products, categories) => {
          let obj = {};
          categories.forEach((category) => {
            let arr = products.filter(
              (product) => product.category === category
            );
            obj[category] = arr;
          });

          return obj;
        };
        setShop({
          products: payload.products,
          ...getAllSortedProducts(payload.products, payload.category),
        });
        return;
      case REMOVE_PRODUCT:
        setShop([]);
        return;
    }
  };

  const handleSelectedCategory = (category) => {
    setSelectedCategry(shop[category]);
  };

  return { shop, handleShop, selectedCategory, handleSelectedCategory };
};

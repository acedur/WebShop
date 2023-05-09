import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../../Context/ShopContext";
import "./Categories.css";

function Categories() {
  const { shop, handleSelectedCategory, selectedCategory } =
    useContext(ShopContext);

  useEffect(() => {
    if (shop.products.length) {
      handleSelectedCategory("products");
    }
  }, [shop.products.length]);

  return (
    <div className="categoriesContainer navBorder">
      {Object.keys(shop).map((categs) => {
        return (
          <div
            type="radio"
            key={categs}
            onClick={() => handleSelectedCategory(categs)}
            className={
              categs === selectedCategory
                ? "categoriesBtn categoriesBtnActive"
                : "categoriesBtn"
            }
          >
            {categs}
          </div>
        );
      })}
    </div>
  );
}

export default Categories;

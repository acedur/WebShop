import React from "react";
import Cards from "../Cards/Cards";
import Categories from "./Categories/Categories";
import "./Products.css";

function Products() {
  return (
    <div className="productsContainer">
      <Categories />
      <Cards />
    </div>
  );
}

export default Products;

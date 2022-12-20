import React, { useContext, useEffect, useState } from "react";
import { ADD_PRODUCT } from "../../Context/action";
import { ShopContext } from "../../Context/ShopContext";
import Loading from "../Loading/Loading";
import Card from "./Card/Card";

function Cards() {
  const { shop, handleShop } = useContext(ShopContext);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((res) => {
        setData(res.products);
      });
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
        setCategory(res);
      });
  }, []);

  useEffect(() => {
    if (data.length && category.length) {
      handleShop(ADD_PRODUCT, { products: data, category: category });
    }
  }, [data.length, category.length]);

  if (shop.length === 0) {
    return (
      <div className="mainCardsContainer">
        <Loading />
      </div>
    );
  }

  return (
    <div className="mainCardsContainer">
      {shop.products.map((product) => {
        return <Card key={product.id} data={product} />;
      })}
    </div>
  );
}

export default Cards;

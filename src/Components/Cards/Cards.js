import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import Card from "./Card/Card";

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((json) => {
        setData(json.products);
      });
  }, []);
  if (data.length === 0) {
    return (
      <div className="mainCardsContainer">
        <Loading />
      </div>
    );
  }

  return (
    <div className="mainCardsContainer">
      {data.map((item) => {
        return <Card key={item.id} data={item} />;
      })}
    </div>
  );
}

export default Cards;

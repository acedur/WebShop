import React from "react";
import "./Card.css";
import { useOutletContext } from "react-router-dom";

function Card({ data }) {
  const { title, description, price, rating, thumbnail } = data;
  const [showModal, setShowModal] = useOutletContext();

  return (
    <div className="cardContainer">
      <img src={thumbnail} alt="Product" className="images" />
      <div className="header">{title}</div>
      <div className="shortDesc">{description}</div>
      <div className="priceRating">
        <div onClick={() => setShowModal(true)}>Price : {price}$</div>
        <div>Rating : {rating}</div>
      </div>
    </div>
  );
}

export default Card;

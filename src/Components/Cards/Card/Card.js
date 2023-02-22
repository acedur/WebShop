import React, { useState } from "react";
import "./Card.css";
import Modal from "../../Modal/Modal";

function Card({ data }) {
  const { title, description, price, rating, thumbnail } = data;
  const [showModal, setShowModal] = useState(false);
  const handleModal = (value) => {
    setShowModal(value);
  };

  return (
    <>
      <div className="cardContainer" onClick={() => handleModal(true)}>
        <img src={thumbnail} alt="Product" className="images" />
        <div className="header">{title}</div>
        <div className="shortDesc">{description}</div>
        <div className="priceRating">
          <div>Price : {price}$</div>
          <div>Rating : {rating}</div>
        </div>
      </div>
      {showModal && <Modal handleModal={handleModal} data={data} />}
    </>
  );
}

export default Card;

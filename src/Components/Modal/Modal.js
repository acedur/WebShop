/* eslint-disable react/prop-types */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "./Modal.css";
import "swiper/css";

function Modal({ handleModal, data }) {
  const { brand, title, images, description, price, rating, stock } = data;

  return (
    <div className="modalContainer" onClick={() => handleModal(false)}>
      <div
        className="modalContainer-div"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="image">
          <Swiper modules={[Navigation, Pagination]}>
            {images.map((image, index) => (
              <SwiperSlide key={image.id}>
                <img src={image} alt={image} key={`${image}-${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="modalContentContainer">
          <div className="brand">{brand}</div>
          <h1>{title}</h1>
          <div className="description">{description}</div>
          <div>{price} $</div>
          <div>{rating}</div>
          <div className="stock">Stock: {stock} pieces</div>
        </div>
        <div className="closeModal" onClick={() => handleModal(false)}>
          X
        </div>
      </div>
    </div>
  );
}

export default Modal;

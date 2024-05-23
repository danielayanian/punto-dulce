import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Importa los iconos de estrellas
import '..//scss/layouts/Reviews.scss'; // Importa el archivo SCSS

const Reviews = () => {
  return (
    <div className="reviews-container">
      <h3>OPINIONES</h3>
      <div className="review-card">
        <div className="user-photo-container">
          <img src="user1.jpg" alt="User 1" className="user-photo" />
        </div>
        <div className="user-name">Juan Pérez</div>
        <div className="user-review">¡Excelente producto! Superó todas mis expectativas.</div>
        <div className="user-rating">
          <FaStar className="star filled" />
          <FaStar className="star filled" />
          <FaStar className="star filled" />
          <FaStar className="star filled" />
          <FaStar className="star filled" />
        </div>
      </div>
      <div className="review-card">
        <div className="user-photo-container">
          <img src="user2.jpg" alt="User 2" className="user-photo" />
        </div>
        <div className="user-name">María García</div>
        <div className="user-review">Delicioso, lástima no tener cerca una tienda física, compraría mucho mas a menudo .</div>
        <div className="user-rating">
          <FaStar className="star filled" />
          <FaStar className="star filled" />
          <FaStar className="star filled" />
          <FaStar className="star filled" />
          <FaRegStar className="star" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;

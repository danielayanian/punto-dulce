// Fichero src/components/CategoryIcons.jsx

import React from "react";
import "..//scss/layouts/CategoryIcons.scss";


const CategoryIcons = () => {
  // Define las categorías con sus respectivas imágenes y nombres
  const categories = [
    { name: "Chocolates", image: "chocolates.jpg" },
    { name: "Alfajores", image: "alfajores.jpg" },
    { name: "Bombones", image: "bombones.jpg" },
    { name: "Chupetines y Chicles", image: "chupetines.jpg" },
    { name: "Caramelos y Gomitas", image: "caramelos.jpg" },
    { name: "Galletitas y Barritas", image: "galletitas.jpg" },
  ];

  return (
    <div className="category-icons">
      {categories.map((category, index) => (
        <div key={index} className="category-icon">
          <img src={category.image} alt={category.name} />
          <span>{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryIcons;

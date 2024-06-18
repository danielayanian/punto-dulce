/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import ButtonSum from "../Button/ButtonSum.jsx";
import styles from "./ProductCard.module.css";
import linkDark from "/img/link-dark.svg";
import linkWhite from "/img/link-white.svg";
import Right from "/img/chevron-right.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { urls } from "../../helpers/url.js";

export const ProductCard = ({ product }) => {
  // useEffect(() => {
  //   usePutCart(product.id, quantity);
  // }, [product.id, quantity]);

  const handleSubmit = async (productId, quantity) => {
    const url =`${urls.cart}/${productId}?quantity=${quantity}`
    const token = localStorage.getItem("jwt") 
    const response = await fetch(url, {
      method: 'PUT',
      headers: {"Authorization": `Bearer ${token}`, "Content-Type":'application/json' },
    })
  
    if (!response.ok) {
      throw new Error('Error fetching quantities')
    }
  };

  const [selectedOption, setSelectedOption] = useState("");

  const [quantity, setQuantity] = useState(0);


  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleInputChange = (event) => {
    setQuantity(event.target.value);
  };

  

  const handleQuantityChange = (action) => {
    if (action === "increment") {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else if (action === "decrement") {
      setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0)); 
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageButtons}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
          />
          {/* <ButtonSum quantity={quantity} handleInputChange={handleInputChange} /> */}
          <button onClick={() => handleQuantityChange("decrement")}>
            {/* Icono de menos */}
          </button>
          <input
            type="number"
            placeholder=""
            className={styles.styleInput}
            value={quantity}
            onChange={(e) => handleInputChange(e)}
          />
          <button onClick={() => handleQuantityChange("increment")}>
            {/* Icono de más */}
          </button>
        </div>
        <h2 className={styles.nameStyle}>{
        product.name}</h2>
        
        <p className={styles.description}>{product.description}</p>

        <div className={styles.prices}>
          <div>
            <input
              type="radio"
              id="minorista"
              name="Price"
              value="minorista"
              checked={selectedOption === "minorista"}
              onChange={() => handleOptionChange("minorista")}
              className={`${styles.customRadioButton} ${
                selectedOption === "minorista" ? styles.selected : ""
              }`}
            />
            <label htmlFor="minorista" className={styles.customRadioLlabel}>
              Minorista - $ {product.priceMinor}
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="mayor"
              name="Price"
              value="mayorista"
              checked={selectedOption === "mayorista"}
              onChange={() => handleOptionChange("mayorista")}
              className={`${styles.customRadioButton} ${
                selectedOption === "mayorista" ? styles.selected : ""
              }`}
            />
            <label htmlFor="mayor" className={styles.customRadioLlabel}>
              Mayorista - ${product.priceMajor}
            </label>
          </div>
        </div>

        <div className={styles.buttonsContainer}>
          {/* hacer pop up */}
          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <Button
              text={"Carrito"}
              icon={linkDark}
              className={styles.bottomButton}
              onClick={() => handleSubmit( product.id,quantity)}
            />
          </Link>

          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <Button
              id={product.id}
              text={"Comprar"}
              icon={linkWhite}
              onClick={() => handleSubmit(product.id,quantity)}
              className={`${styles.bottomButtonRight} ${styles.bottomButton}`}
            />
          </Link>
        </div>
        <div className={styles.delivery}>
          <FontAwesomeIcon
            icon={faTruck}
            alt="truck"
            className={styles.truckIcon}
          />
          <h3 className={styles.deliveryText}>Envio gratis</h3>
        </div>
      </div>
      <Link to="/policy" className={styles.policy}>
        Ver politicas de envio
        <img src={Right} />
      </Link>
    </>
  );console.log(product);
};
export default ProductCard;

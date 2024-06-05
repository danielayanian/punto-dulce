import Button from "../Button/Button";
import ButtonSum from "../Button/ButtonSum.jsx";
import styles from "./ProductCard.module.css";
import linkDark from "../../../public/img/link-dark.svg";
import linkWhite from "../../../public/img/link-white.svg";
import Right from "../../../public/img/chevron-right.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export const ProductCard = ({ product }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
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
          <ButtonSum />
        </div>
        <h2 className={styles.nameStyle}>{product.name}</h2>
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
              Minorista - {product.priceMinor}
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
              Mayorista - {product.priceMajor}
            </label>
          </div>
        </div>

        <div className={styles.buttonsContainer}>
          <Button
            text={"Carrito"}
            icon={linkDark}
            className={styles.bottomButton}
          />
          <Button
            text={"Comprar"}
            icon={linkWhite}
            className={styles.bottomButtonRight}
          />
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
      <Link to="" className={styles.policy}>
        Ver politicas de envio
        <img src={Right} />
      </Link>
    </>
  );
};

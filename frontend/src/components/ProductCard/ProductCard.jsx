import Button from "../Button/Button";
import ButtonSum from "../Button/ButtonSum.jsx";
import styles from "./ProductCard.module.css";
import link from "../../../public/img/link-button.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

export const ProductCard = ({ product }) => {
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
            <input type="radio" id="minorista" name="Price" value="minorista" />
            <label htmlFor="minorista">Minorista - {product.priceMinor}</label>
          </div>
          <div>
            <input type="radio" id="mayor" name="Price" value="mayorista" />
            <label htmlFor="mayor">Mayorista - {product.priceMajor}</label>
          </div>
        </div>

        <div className={styles.buttonsContainer}>
          <Button
            text={"Carrito"}
            icon={link}
            className={styles.bottomButton}
          />
          <Button
            text={"Comprar"}
            icon={link}
            className={styles.bottomButton}
          />
        </div>
        <div className={styles.delivery}>
        <FontAwesomeIcon icon={faTruck} alt="truck" className={styles.truckIcon}/>
          <h3>Envio gratis</h3>
        </div>
        
      </div>
    </>
  );
};

import Button from "./Button";
import plus from "/img/plus.svg";
import minus from "/img/minus.svg";
import styles from './Button.module.css'

const ButtonSum = ({ quantity, handleInputChange }) => {
  
  return (
    <div className={styles.buttonContainer}>
      <Button text="" icon={minus} className={`${styles.buttonIcon} ${styles.buttonRight}`} />
      <input
        type="number"
        placeholder=""
        className={styles.styleInput}
        value={quantity}
        onChange={handleInputChange}
      />
      <Button text="" icon={plus} className={`${styles.buttonIcon} ${styles.buttonLeft}`} />
    </div>
  );
};

export default ButtonSum;

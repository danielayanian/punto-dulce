import Button from "./Button";
import plus from "../../../public/img/plus.svg";
import minus from "../../../public/img/minus.svg";
import styles from './Button.module.css'

const ButtonSum = () => {
  return (
    <div className={styles.buttonContainer}>
      <Button text="" icon={minus} className={`${styles.buttonIcon} ${styles.buttonRight}`}/>
      <Button text="" icon={plus} className={`${styles.buttonIcon} ${styles.buttonLeft}`}/>

    </div>
  );
};

export default ButtonSum;

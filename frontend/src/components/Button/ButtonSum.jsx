import Button from "./Button";
import plus from "../../../public/img/mas.png";
import minus from "../../../public/img/menos.png";
import styles from './Button.module.css'

const ButtonSum = () => {
  return (
    <div className={styles.buttonContainer}>
      <Button text="" icon={minus} className={styles.buttonIcon}/>
      <Button text="" icon={plus} className={styles.buttonIcon}/>

    </div>
  );
};

export default ButtonSum;

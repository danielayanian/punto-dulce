import wsp from "/img/Whatsapp.svg";
import styles from "./Wsp.module.css";

export const Wsp = () => {
  const phoneNumber = "+5492616541624"; 

  const handleWspClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, `blank`);

    //revisar por que no redirecciona correctamente
  };
  return (
    <div className={styles.container}>
      <img 
        src={wsp} 
        className={styles.wspStyle}
        onClick={handleWspClick} 
      />
    </div>
  );
};
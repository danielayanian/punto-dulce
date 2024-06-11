import Button from "../Button/Button";
import giftcard from "../../../public/img/giftcard.png";
import Gift from "../../../public/img/gift.svg";

import styles from "./GiftCard.module.css";

export const GiftCard = () => {
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>REGALA CON NUESTRA GIFT CARD</h3>
        <p className={styles.text}>
          Ofrecemos 3 tipos de Gift Cards para regalar a tus seres queridos,
          perfectas para sorprender con dulzura. Puedes elegir entre las Gift
          Cards estándar, premium y personalizadas, cada una con beneficios y
          opciones únicas para adaptarse a tus gustos y necesidades. ¡Regala
          dulzura con nuestras Gift Cards y endulza el día de esa persona
          especial!
        </p>

        <Button text={"Regala"} icon={Gift} className={styles.giftButton} />
      </div>
      <img src={giftcard} alt={"gifcard"} />
    </>
  );
};

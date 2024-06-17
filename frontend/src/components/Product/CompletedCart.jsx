import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import styles from './CompletedCart.module.css';

const TuComponente = () => {
  return (
    <div className={styles.contenedor}>
      <BsCheckCircle className={styles.iconoCirculoTic} />

      <h2 className={styles.succe}>COMPRA REALIZADA CON ÉXITO!</h2>

      <div>
        <p>En breve arrancaremos a preparar tu pedido</p>
        <p>Puedes ver el estado de tu compra en tu cuenta.</p>
      </div>
    </div>
  );
};

export default TuComponente;

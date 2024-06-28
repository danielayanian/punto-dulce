import React from 'react';
import { Link } from 'react-router-dom';
import Left from '/img/chevron-left.svg';
import Right from '/img/chevron-right.svg';
import styles from '../Product/Product.module.css';

function NavButton() {
  return (
    <div className={styles.buttonContain}>
    <Link to="/" className={`${styles.buttonCart} ${styles.buttonRight}`}>
         <img src={Left} /> Regresar
  
    </Link>
    <Link to="/paymentDetails" className={`${styles.buttonCart} ${styles.buttonL}`}>
      Siguiente
      <img src={Right} />
    </Link>
  </div>
  )
}

export default NavButton
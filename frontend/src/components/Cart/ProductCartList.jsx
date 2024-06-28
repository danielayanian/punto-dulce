import React from 'react';
import { Link } from 'react-router-dom';
import Left from '/img/chevron-left.svg';
import Right from '/img/chevron-right.svg';
import ProductCart from "../Product/ProductCart";
import styles from "../Cart/ProductCartList.module.css";

function ProductCartList({data}) {
  const totalPriceMinorista = data.reduce((total, item) => total + item.totalPriceMinor, 0);



  return (
    <>
      <ProductCart data={data} /> 
      <div className={styles.contentCard}>
        <span className={styles.titlePrice}>Precio Total Minorista:</span>
        <span>${totalPriceMinorista}</span>
      </div>
      <div className={styles.separeitor}></div>
      <div className={styles.buttonContent}>
        <Link to="/" className={styles.buttonLeft}>
          Regresar
          <img src={Left} />
        </Link>
        
        <Link to="/paymentDetails"  data={data} className={styles.buttonRight}>
          Siguiente
          <img src={Right} />
        </Link>
      </div>
    </>
  );
}

export default ProductCartList;

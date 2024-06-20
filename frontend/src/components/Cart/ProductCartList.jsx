
import React from 'react';
import { Link } from 'react-router-dom';
import Left from '/img/chevron-left.svg'
import Right from '/img/chevron-right.svg'
import ProductCart from "../Product/ProductCart";
import styles from "../Cart/ProductCartList.module.css"



function ProductCartList({ data }) {

  return (
    <>
      <ProductCart products={data.items} />
      <div className={styles.contentCard}>
        <span className={styles.titlePrice}>Precio Total Minorista:</span>
        <span>${data.totalPriceMinor}</span>
       
      </div>
      <div className={styles.separeitor}></div>
      <div className={styles.buttonContent}>
        <Link to="/" className={styles.buttonLeft}>
          Regresar
         <img src={Left}/> 
        </Link>
        
        <Link to="/paymentDetails"  className={styles.buttonRight}>
          Siguiente
         <img src={Right}/> 
        </Link>
      </div>
    </>
  );
}

export default ProductCartList;


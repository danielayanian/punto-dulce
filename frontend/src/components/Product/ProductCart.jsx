/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './Product.module.css';
// import Left from '/img/chevron-left.svg'
// import Right from '/img/chevron-right.svg'

function Product({ products }) {

  return (
    <>
      <div className={styles.top}>
        <span>PRODUCTO</span>
        <span>TOTAL</span>
      </div>
      <div className={styles.cartContainer}>
        {products?.map((product,index) => (
          <div  key={`${product.id?? 'unknown'}-${index}`} className={styles.productContainer}>
            <div className={styles.productInfo}>
              <div className={styles.topTitle}>
                <img
                  src={product.product.image}
                  alt={product.name}
                  className={styles.productImage}
                />
                <div className={styles.productName}>{product.product.name}</div>
              </div>
              <div className={styles.Description}>
                {product.product.description}
              </div>
            </div>
            <div className={styles.productDetails}>
              <div className={styles.detailRow}>
                <span className={styles.detailTitle}>Cant:</span>
                <span className={styles.detailValue}>{product.quantity}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailTitle}>$ Unit:</span>
                <span className={styles.detailValue}>${product.product.priceMinor}</span>
              </div>
            </div>
              
          </div>
        ))}
        {/* <div className={styles.buttonContainer}>
          <Link to="/" className={`${styles.button} ${styles.buttonRight}`}>
            Regresar
            <img src={Left}/>
          </Link>
          <Link to="/paymentDetails" className={`${styles.button} ${styles.buttonLeft}`}>
            Siguiente
            <img src={Right}/>
          </Link>
        </div> */}
    
      </div>
    </>
  );
}

export default Product;

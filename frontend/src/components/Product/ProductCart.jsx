import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Product.module.css';

function ProductCart({ products }) {
  return (
    <>
      <div className={styles.top}>
        <span>PRODUCTO</span>
        <span>TOTAL</span>
      </div>
      <div className={styles.cartContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.productContainer}>
            <div className={styles.productInfo}>
              <div className={styles.topTitle}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className={styles.productImage}
                />
                <div className={styles.productName}>{product.name}</div>
              </div>
              <div className={styles.productDescription}>
                {product.description}
              </div>
            </div>
            <div className={styles.productDetails}>
              <div className={styles.detailRow}>
                <span className={styles.detailTitle}>Cont:</span>
                <span className={styles.detailValue}>{product.quantity}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailTitle}>$ Unit:</span>
                <span className={styles.detailValue}>${product.price}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailTitle}>Precio Total Minorista:</span>
                <span className={styles.detailValue}>
                  ${product.price * product.quantity}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.buttonContainer}>
          <Link to="/home" className={styles.button}>
            Regresar
          </Link>
          <Link to="/paymentDetails"  className={styles.button}>
            Siguiente
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductCart;

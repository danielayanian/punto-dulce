/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Product.module.css';

function Product({ products }) {
  return (
    <>
      <div className={styles.topCart}>
        <span>PRODUCTO</span>
        <span>TOTAL</span>
      </div>
      <div className={styles.cartMContainer}>
        {products?.map((product, index) => {
          if (!product || !product.product || !product.product.image) {
            console.error(`Producto en la posición ${index} es inválido o no tiene la propiedad 'image'`);
            return null; // O renderiza un placeholder, mensaje de error, etc.
          }

          return (
            <div key={`${product.id ?? 'unknown'}-${index}`} className={styles.productContainer}>
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
          );
        })}
      </div>
    </>
  );
}

export default Product;

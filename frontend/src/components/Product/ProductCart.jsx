import React from 'react';
import styles from './Product.module.css';

function ProductCart({ data }) {
  console.log('Data:', data);

  return (
    <>
      <div className={styles.topCart}>
        <span>PRODUCTO</span>
        <span>TOTAL</span>
      </div>
      <div className={styles.cartMContainer}>
        {data.map((item, index) => {
          const { product, quantity, totalPriceMinor, totalPriceMajor } = item;
          const { id, name, description, image } = product || {};

          if (!name || !image) {
            console.error(
              `Product at index ${index} is invalid or missing 'name' or 'image'`
            );
            return null;
          }

          return (
            <div
              key={`${id ?? 'unknown'}-${index}`}
              className={styles.productContainer}
            >
              <div className={styles.productInfo}>
                <div className={styles.topTitle}>
                  <img src={image} alt={name} className={styles.productImage} />
                  <div className={styles.DescName}>
                    <div className={styles.productName}>{name}</div>
                
                  <div className={styles.Description}>{description}</div>  </div>{' '}
                </div>
              </div>
              <div className={styles.productDetails}>
                <div className={styles.detailRow}>
                  <span className={styles.detailTitle}>Cantidad:</span>
                  <span className={styles.detailValue}>{quantity}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailTitle}>$ Unit.</span>

                  <span className={styles.detailValue}>${totalPriceMinor}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductCart;

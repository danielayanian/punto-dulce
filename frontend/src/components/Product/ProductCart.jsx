import React from 'react';
import styles from './Product.module.css';

function ProductCart({ data }) {
  console.log('Data:', data); /

 
  if (!data || !Array.isArray(data.items) || data.items.length === 0) {
    console.error('Products is empty or not an array:', data);
    return <div>No products available</div>;
  }

  return (
    <>
      <div className={styles.topCart}>
        <span>PRODUCTO</span>
        <span>TOTAL</span>
      </div>
      <div className={styles.cartMContainer}>
        {data.items.map((product, index) => {
          if (!product || !product.name || !product.image) {
            console.error(`Product at index ${index} is invalid or missing 'name' or 'image'`);
            return null;
          }

          return (
            <div key={`${product.id ?? 'unknown'}-${index}`} className={styles.productContainer}>
              <div className={styles.productInfo}>
                <div className={styles.topTitle}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.productImage}
                  />
                  <div className={styles.productName}>{product.name}</div>
                </div>
                <div className={styles.Description}>
                  {product.description}
                </div>
              </div>
              <div className={styles.productDetails}>
                <div className={styles.detailRow}>
                  <span className={styles.detailTitle}>Cantidad:</span>
                  <span className={styles.detailValue}>{product.quantity}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailTitle}>Precio Unitario:</span>
                  <span className={styles.detailValue}>${product.price}</span>
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

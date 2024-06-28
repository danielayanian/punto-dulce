import React from 'react';
import styles from './PopupCart.module.css'; 
import ProductCart from "../Product/ProductCart";

const PopupCart = ({ onClose, cartData, isLoading, error}) => {
  return (
    <div className={styles['popup-cart-overlay']}>
      <div className={styles['popup-cart-content']}>
        <div className={styles['popup-cart-top']}>
          <h2>1 Producto</h2>
          <span className={styles['popup-cart-close-button']} onClick={onClose}>×</span>
        </div>
        <div className={styles.cartItems}>
          {isLoading && <p>Cargando...</p>}
          {error && <p>Error al cargar el carrito</p>}
          {cartData && <ProductCart data={cartData} />}
        </div>
   
      </div>
    </div>
  );
};

export default PopupCart;

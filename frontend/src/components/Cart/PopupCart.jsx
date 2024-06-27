import React from 'react';
import styles from './PopupCart.module.css'; // Importa los estilos CSS específicos

const PopupCart = ({ onClose }) => {
  return (
    <div className={styles['popup-cart-overlay']}>
      <div className={styles['popup-cart-content']}>
        <h2>Cart Popup</h2>
        <div className={styles['cart-items']}>
          {/* Renderiza los elementos del carrito aquí */}
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </div>
        <button className={styles['popup-cart-close-button']} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupCart;

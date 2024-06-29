import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './PopupCart.module.css'; 
import ProductCart from "../Product/ProductCart";
import useGetCart from '../../Hooks/useGetCart';

const PopupCart = ({ onClose, clearCart }) => {
  const { isLoading, error, data } = useGetCart();
  const [purchaseType, setPurchaseType] = useState('minorista'); 

  const handlePurchaseTypeChange = (e) => {
    setPurchaseType(e.target.value);
  };

  console.log('PopupCart data:', data);

  return (
    <div className={styles['popup-cart-overlay']}>
      <div className={styles['popup-cart-content']}>
        <div className={styles['popup-cart-top']}>
          <h2>{data && data.items.length} Producto{data && data.items.length !== 1 ? 's' : ''}</h2>
          <span className={styles['popup-cart-close-button']} onClick={onClose}>×</span>
        </div>
        <div className={styles.cartItems}>
          {isLoading && <p>Cargando...</p>}
          {error && <p>Error al cargar el carrito</p>}
          {data && <ProductCart data={data.items} />}
</div>
        <div className={styles['purchase-type']}>
      
          <label>
            <input
              type="radio"
              value="minorista"
              checked={purchaseType === 'minorista'}
              onChange={handlePurchaseTypeChange}
            />
            Minorista - ${data ? (data.totalPriceMinor / 100).toFixed(2) : '0.00'}
          </label>
          <label>
            <input
              type="radio"
              value="mayorista"
              checked={purchaseType === 'mayorista'}
              onChange={handlePurchaseTypeChange}
            />
            Mayorista - ${data ? (data.totalPriceMajor / 100).toFixed(2) : '0.00'}
          </label>
        </div>
        <div className={styles['purchase-info']}>
          <p>Usted está a punto de comprar una cuenta {purchaseType === 'minorista' ? 'Minorista' : 'Mayorista'}.</p>
        </div>
        <div className={styles['purchase-links']}>
          <Link to="/Cart" className={styles['popup-cart-link']} onClick={onClose}>Ir al Carrito</Link>
          <a href="#" className={styles['popup-cart-link']} onClick={(e) => { e.preventDefault(); clearCart(); }}>Eliminar Todo el Carrito</a>
        </div>
      </div>
    </div>
  );
};

export default PopupCart;

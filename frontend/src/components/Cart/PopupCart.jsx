import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './PopupCart.module.css';
import ProductCart from '../Product/ProductCart';
import useGetCart from '../../Hooks/useGetCart';

const PopupCart = ({ onClose, isLoggedIn }) => {
  const { isLoading, error, data } = useGetCart();
  const [purchaseType, setPurchaseType] = useState('minorista'); // Estado para el tipo de compra
  const navigate = useNavigate();

  // Función para manejar el cambio en el tipo de compra
  const handlePurchaseTypeChange = (e) => {
    setPurchaseType(e.target.value);
  };

  // Log para verificar los datos del carrito
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
          {data && <ProductCart data={data.items} purchase={purchaseType} />}
        </div> <div className={styles['purchase-info']}>
    
          <p>Usted está a punto de comprar una cuenta {purchaseType === 'minorista' ? 'Minorista' : 'Mayorista'}.</p>
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
       
        <div className={styles['purchase-links']}>
         
          <button
            className={styles['popup-cart-link']}
            onClick={() => {
              onClose();
              navigate("/cart", { state: { purchaseType } });
            }}
          >
            Iniciar Compra
          </button>
          <a href="#" className={styles['popup-cart-link']} onClick={(e) => { e.preventDefault(); clearCart(); }}>Vaciar Carrito</a>
        </div>
      </div>
    </div>
  );
};

export default PopupCart;
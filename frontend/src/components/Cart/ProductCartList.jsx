import React from 'react';
import { Link } from 'react-router-dom';
import Left from '/img/chevron-left.svg';
import Right from '/img/chevron-right.svg';
import ProductCart from "../Product/ProductCart";
import styles from "../Cart/ProductCartList.module.css";
import useGetCart from '../../Hooks/useGetCart';

function ProductCartList() {
  const { isLoading, error, data } = useGetCart();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Error fetching cart data:', error);
    return <div>Error loading cart data</div>;
  }

  if (!data || !data.items) {
    console.error('No cart data available or data.items is undefined');
    return <div>No items in cart</div>;
  }

  console.log('Cart data:', data);
  console.log('Cart items:', data.items);

  return (
    <>
      <ProductCart data={data} /> 
      <div className={styles.contentCard}>
        <span className={styles.titlePrice}>Precio Total Minorista:</span>
        <span>${data.totalPriceMinor}</span>
      </div>
      <div className={styles.separeitor}></div>
      <div className={styles.buttonContent}>
        <Link to="/" className={styles.buttonLeft}>
          Regresar
          <img src={Left} />
        </Link>
        
        <Link to="/paymentDetails" className={styles.buttonRight}>
          Siguiente
          <img src={Right} />
        </Link>
      </div>
    </>
  );
}

export default ProductCartList;

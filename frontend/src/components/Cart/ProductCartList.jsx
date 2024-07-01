import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Left from '/img/chevron-left.svg';
import Right from '/img/chevron-right.svg';
import ProductCart from '../Product/ProductCart';
import styles from '../Cart/ProductCartList.module.css';

function ProductCartList({ data, purchase }) {
  const totalPriceMinorista = data.reduce((total, item) => total + item.totalPriceMinor, 0);
  const totalPriceMayorista = data.reduce((total, item) => total + item.totalPriceMajor, 0);

  const totalPrice = purchase === 'minorista' ? totalPriceMinorista : totalPriceMayorista;

  const navigate = useNavigate(); 

  const handleNext = () => {
    navigate('/paymentDetails', { state: { purchaseType: purchase } }); 
  };

  console.log('Purchase type in ProductCartList:', purchase);

  return (
    <>
      <ProductCart data={data} purchase={purchase} />
      <div className={styles.contentCard}>
        <span className={styles.titlePrice}>
          {purchase === 'minorista' ? 'Precio Total Minorista:' : 'Precio Total Mayorista:'}
        </span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <div className={styles.separeitor}></div>
      <div className={styles.buttonContent}>
        <Link to="/" className={styles.buttonLeft}>
          Regresar
          <img src={Left} alt="Back" />
        </Link>
        <button onClick={handleNext} className={styles.buttonRight}>
          Siguiente
          <img src={Right} alt="Next" />
        </button>
      </div>
    </>
  );
}

export default ProductCartList;

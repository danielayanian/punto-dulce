import React from 'react';
import { Link } from 'react-router-dom';
import Left from '/img/chevron-left.svg'
import Right from '/img/chevron-right.svg'
import ProductCart from "../Product/ProductCart";



function ProductCartList({ data }) {

  return (
    <>
      <ProductCart products={data.items} />
      <div>
        <span>Precio Total Minorista:</span>
        <span>${data.totalPriceMinor}</span>
      </div>
      <div>
        <Link to="/">
          Regresar
         <img src={Left}/> 
        </Link>
        <Link to="/paymentDetails">
          Siguiente
         <img src={Right}/> 
        </Link>
      </div>
    </>
  );
}

export default ProductCartList;

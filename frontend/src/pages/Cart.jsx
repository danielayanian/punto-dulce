import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCartList from '../components/Cart/ProductCartList';
import useGetCart from '../Hooks/useGetCart';

function Cart() {
  const location = useLocation();
  const { purchaseType } = location.state || { purchaseType: 'minorista' };

  const { isLoading, error, data } = useGetCart();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log('Cart data:', data);
  console.log('Purchase type in Cart:', purchaseType);

  return <ProductCartList purchase={purchaseType} data={data.items} />;
}

export default Cart;
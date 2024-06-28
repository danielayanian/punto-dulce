import React from 'react';
import ProductCartList from '../components/Cart/ProductCartList';
import useGetCart from '../Hooks/useGetCart';

function Cart() {
  const { isLoading, error, data } = useGetCart();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log('Cart data:', data);

  return <ProductCartList data={data.items} />;
}

export default Cart;

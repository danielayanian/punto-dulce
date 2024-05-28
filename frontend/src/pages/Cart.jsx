import React from 'react';
import Product from '../components/Product/Product';


const Cart = () => {
  const products = [
    { id: 1, categoryName: 'Alfajores', imageUrl: '/img/i-alfajor.png', price: 10, quantity: 2 },
    { id: 2, categoryName: 'Bombones', imageUrl: '/img/i-bombones.png', price: 15, quantity: 1 },
    { id: 3, categoryName: 'Chocolate', imageUrl: '/img/i-chocolates.png', price: 12, quantity: 3 },
    { id: 4, categoryName: 'Chupetines', imageUrl: '/img/i-chupetines.png', price: 8, quantity: 5 },
    { id: 5, categoryName: 'Galletas', imageUrl: '/img/i-galletas.png', price: 6, quantity: 4 },
  ];

  return <Product products={products} />;
};

export default Cart;

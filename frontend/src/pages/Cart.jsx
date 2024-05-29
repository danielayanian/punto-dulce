import React from 'react';
import ProductCart from '../components/Product/ProductCart';


const Cart = () => {
  const products = [
    { 
      id: 1, 
      name: 'Choco Delicia', 
      description: 'Un delicioso alfajor con relleno de dulce de leche y cobertura de chocolate.',
      imageUrl: '/img/i-alfajor.png', 
      price: 10, 
      quantity: 2 
    },
    { 
      id: 2, 
      name: 'Bon Bombón', 
      description: 'Exquisitos bombones de chocolate rellenos de crema de avellanas.', 
      imageUrl: '/img/i-bombones.png', 
      price: 15, 
      quantity: 1 
    },
    { 
      id: 3, 
      name: 'Choco Fusión', 
      description: 'Tableta de chocolate con leche y trozos de almendra.', 
      imageUrl: '/img/i-chocolates.png', 
      price: 12, 
      quantity: 3 
    },
    { 
      id: 4, 
      name: 'Chupa Choco', 
      description: 'Chupetines de chocolate con centro de caramelo.', 
      imageUrl: '/img/i-chupetines.png', 
      price: 8, 
      quantity: 5 
    },
    { 
      id: 5, 
      name: 'Galle Choco', 
      description: 'Galletas rellenas de crema de chocolate.', 
      imageUrl: '/img/i-galletas.png', 
      price: 6, 
      quantity: 4 
    },
  ];
  

  return <Product products={products} />;
};

export default Cart;

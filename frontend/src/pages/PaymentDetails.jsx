import React, { useState, useEffect } from 'react';
import PayFirstTime from '../components/Product/PayFirstTime';
import PayRegistered from '../components/Product/PayRegistered';
import PayWholesaler from '../components/Product/PayWholesaler';

function PaymentDetails() {
  const [registeredUser, setRegisteredUser] = useState(false); // Default to false
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [wholesaler, setWholesaler] = useState(false); // Default to false

  // Lista de productos (simulación de datos)
  const productList = [
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

  useEffect(() => {
    // Simulación de verificación de usuario registrado y mayorista
    const isUserRegistered = false; 
    const isWholesaler = false; 

    setRegisteredUser(isUserRegistered);
    setWholesaler(isWholesaler);

    // Establecer la lista de productos
    setProducts(productList);
  }, []);

  // Función para renderizar el componente correcto según el estado de registro del usuario
  const renderPaymentComponent = () => {
    if (wholesaler === true) {
      return <PayWholesaler products={products} />;
    } else if (registeredUser=== true) {
      return <PayRegistered products={products} />;
    } else {
      return <PayFirstTime products={products} />;
    }
  };

  return (
    <div>
      {/* Si el usuario está registrado, renderiza PayRegistered, de lo contrario, PayFirstTime y si es mayorista Wholesaler*/}
      {renderPaymentComponent()}
    </div>
  );
}

export default PaymentDetails;

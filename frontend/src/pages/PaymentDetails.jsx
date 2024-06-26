import React, { useState, useEffect } from 'react';
import PayFirstTime from '../components/Product/PayFirstTime';
import PayRegistered from '../components/Product/PayRegistered';
import PayWholesaler from '../components/Product/PayWholesaler';
import useGetCart from '../Hooks/useGetCart';

function PaymentDetails() {
  const [registeredUser, setRegisteredUser] = useState(false);
  const [wholesaler, setWholesaler] = useState(false);

  useEffect(() => {
    // Simulación de verificación de usuario registrado y mayorista
    const isUserRegistered = true; 
    const isWholesaler = false; 

    setRegisteredUser(isUserRegistered);
    setWholesaler(isWholesaler);
  }, []);

  const { isLoading, error, data } = useGetCart();

  const renderPaymentComponent = () => {
    if (wholesaler) {
      return <PayWholesaler products={data.items} />;
    } else if (registeredUser) {
      return <PayRegistered products={data.items} />;
    } else {
      return <PayFirstTime products={data.items} />;
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Ha habido un error ..</p>;

  return (
    <div>
      {data && data.items ? renderPaymentComponent() : <p>No hay productos en el carrito</p>}
    </div>
  );
}

export default PaymentDetails;

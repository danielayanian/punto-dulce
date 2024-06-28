import React, { useState, useEffect } from 'react';
import PayFirstTime from '../components/Product/PayFirstTime';
import PayRegistered from '../components/Product/PayRegistered';
import PayWholesaler from '../components/Product/PayWholesaler';
import useGetCart from '../Hooks/useGetCart';

function PaymentDetails() {
  const [registeredUser, setRegisteredUser] = useState(false); // Estado para verificar si el usuario está registrado
  const [wholesaler, setWholesaler] = useState(false); // Estado para verificar si es mayorista

  // Utiliza el hook personalizado useGetCart para obtener datos del carrito
  const { isLoading, error, data } = useGetCart();

  useEffect(() => {
    // Simulación de lógica para determinar si el usuario está registrado y si es mayorista
    const isUserRegistered = true; // Lógica para determinar si el usuario está registrado
    const isWholesaler = false; // Lógica para determinar si es mayorista

    setRegisteredUser(isUserRegistered);
    setWholesaler(isWholesaler);

    //   setProducts(data); // No necesitas setear products aquí si ya los estás pasando a los componentes de pago
  }, []);

  // Función para renderizar el componente de pago adecuado según el estado del usuario
  const renderPaymentComponent = () => {
    if (wholesaler) {
      return <PayWholesaler products={data.items} />;
    } else if (registeredUser) {
      return <PayRegistered products={data.items} />;
    } else {
      return <PayFirstTime products={data.items} />;
    }
  };

  // Manejo de errores y estados de carga
  if (error) return <p>Ha habido un error al cargar el carrito.</p>;
  if (isLoading || !data) {
    return <p>Cargando datos del carrito...</p>;
  }

  // Renderiza el componente de pago correspondiente
  return (
    <div>
      {renderPaymentComponent()}
    </div>
  );
}

export default PaymentDetails;

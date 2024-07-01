import React from 'react';
import PayFirstTime from '../components/Product/PayFirstTime';
import PayWholesaler from '../components/Product/PayWholesaler';
import useGetCart from '../Hooks/useGetCart';
import { useLocation } from 'react-router-dom';

function PaymentDetails() {
  // Utiliza el hook personalizado useGetCart para obtener datos del carrito
  const { isLoading, error, data } = useGetCart();
  const location = useLocation();
  const { purchaseType } = location.state || { purchaseType: 'minorista' };
  

  // Función para renderizar el componente de pago adecuado según el tipo de compra
  const renderPaymentComponent = () => {
    if (purchaseType === 'minorista') {
      return <PayFirstTime products={data.items} />;
    } else {
      return <PayWholesaler products={data.items} />;
    }}
  
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

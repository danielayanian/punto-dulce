import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './PaymentForm.module.css';
import Left from '/img/chevron-left.svg';
import Right from '/img/chevron-right.svg';

function PaymentForm({ products }) {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [selectedDelivery, setSelectedDelivery] = useState('');
  const [showCustomerData, setShowCustomerData] = useState(true);
  const [showReceiverData, setShowReceiverData] = useState(false);
  const [customerData, setCustomerData] = useState({
    fullName: '',
    street: '',
    streetNumber: '',
    floor: '',
    apartment: '',
    neighborhood: '',
    phone: ''
  });
  const [receiverData, setReceiverData] = useState({
    fullName: '',
    street: '',
    streetNumber: '',
    floor: '',
    apartment: '',
    neighborhood: '',
    phone: ''
  });

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setSelectedDelivery(e.target.value);
  };

  const handleCustomerDataChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleReceiverDataChange = (e) => {
    const { name, value } = e.target;
    setReceiverData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const toggleShowCustomerData = () => {
    setShowCustomerData(true);
    setShowReceiverData(false);
  };

  const toggleShowReceiverData = () => {
    setShowCustomerData(false);
    setShowReceiverData(true);
  };

  return (
    <div className='container'>
      <div className={styles.buttonContainer}>
        <div className={styles.topRightButton}>
          <Link to="/cart" className={`${styles.button} ${styles.buttonRight}`}>
            Regresar <img src={Left} alt="Left Chevron" />
          </Link>
        </div>
      </div>
      <h2 className='title'>PRODUCTO</h2>
      <div className={styles.cartContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.productContainer}>
            <div className={styles.productInfo}>
              <div className={styles.topTitle}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className={styles.productImage}
                />
                <div className={styles.productName}>{product.name}</div>
              </div>
              <div className={styles.productDescription}>
                {product.description}
              </div>
            </div>
            <div className={styles.productDetails}>
              <div className={styles.detailRow}>
                <span className={styles.detailTitle}>Cont:</span>
                <span className={styles.detailValue}>{product.quantity}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailTitle}>$ Unit:</span>
                <span className={styles.detailValue}>${product.price}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailTitle}>Precio Total Minorista:</span>
                <span className={styles.detailValue}>
                  ${product.price * product.quantity}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.paymentForm}>
        <div className={styles.paymentOptions}>
          <h3>Formas de Pago</h3>
          <div className={styles.paymentOption}>
            <input
              type="radio"
              id="debitCard"
              name="paymentMethod"
              value="debitCard"
              checked={selectedPayment === 'debitCard'}
              onChange={handlePaymentChange}
            />
            <label htmlFor="debitCard">Tarjetas de débito</label>
            {selectedPayment === 'debitCard' && (
              <div className={styles.inputs}>
                <input type="text" placeholder="Número de tarjeta" />
                <div className={styles.expiryAndCvc}>
                  <input type="text" placeholder="MM/AA" className={styles.shortInput} />
                  <input type="text" placeholder="CVC" className={styles.shortInput} />
                </div>
              </div>
            )}
          </div>
          <div className={styles.paymentOption}>
            <input
              type="radio"
              id="dniAccount"
              name="paymentMethod"
              value="dniAccount"
              checked={selectedPayment === 'dniAccount'}
              onChange={handlePaymentChange}
            />
            <label htmlFor="dniAccount">Mi cuenta DNI</label>
            {selectedPayment === 'dniAccount' && (
              <div className={styles.qrImage}>
                <img src="ruta_a_tu_qr_image.png" alt="QR Code" />
              </div>
            )}
          </div>
          <div className={styles.paymentOption}>
            <input
              type="radio"
              id="cash"
              name="paymentMethod"
              value="cash"
              checked={selectedPayment === 'cash'}
              onChange={handlePaymentChange}
            />
            <label htmlFor="cash">Efectivo</label>
          </div>
          <div className={styles.paymentOption}>
            <input
              type="radio"
              id="mercadopago"
              name="paymentMethod"
              value="mercadopago"
              checked={selectedPayment === 'mercadopago'}
              onChange={handlePaymentChange}
            />
            <label htmlFor="mercadopago">Mercado de Pago</label>
            {selectedPayment === 'mercadopago' && (
              <div>
                <a className={styles.yellowLink} href="mercadoPagoLink">
                  Ir a Mercado de Pago
                </a>
              </div>
            )}
          </div>
          <div className={styles.paymentOption}>
            <input
              type="radio"
              id="transfer"
              name="paymentMethod"
              value="transfer"
              checked={selectedPayment === 'transfer'}
              onChange={handlePaymentChange}
            />
            <label htmlFor="transfer">Transferencia</label>
            {selectedPayment === 'transfer' && (
              <p className={styles.wsp}>Los Datos se envían por Whatsapp</p>
            )}
          </div>
        </div>

        <h3>Formas de Entrega</h3>
        <div>
          <div className={styles.paymentOption}>
            <input
              type="radio"
              id="homeDelivery"
              name="deliveryMethod"
              value="homeDelivery"
              checked={selectedDelivery === 'homeDelivery'}
              onChange={handleDeliveryChange}
            />
            <label htmlFor="homeDelivery">Envío a Domicilio</label>
          </div>
          <p>Envío sin cargo</p>
        </div>
        <div>
          <div className={styles.paymentOption}>
            <input
              type="radio"
              id="deposit"
              name="deliveryMethod"
              value="deposit"
              checked={selectedDelivery === 'deposit'}
              onChange={handleDeliveryChange}
            />
            <label htmlFor="deposit">Retirar por Depósito</label>
          </div>
          <p>Dirección de deposito</p>
        </div>

        <h3>Datos de Envío</h3>
        <div className={styles.shippingForm}>
          <div className={styles.customerData}>
            <div className={styles.dataHeader}>
              <label htmlFor="customerData">
                <input
                  type="checkbox"
                  id="customerData"
                  name="customerData"
                  checked={showCustomerData}
                  onChange={toggleShowCustomerData}
                />
                Datos de Cliente
              </label>
            </div>
            {showCustomerData && (
              <div className={styles.inputs}>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Nombre Completo"
                  value={customerData.fullName}
                  onChange={handleCustomerDataChange}
                />
                
                <input
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Calle"
                  value={customerData.street}
                  onChange={handleCustomerDataChange}
                />
                <input
                  type="text"
                  id="streetNumber"
                  name="streetNumber"
                  placeholder="Número"
                  value={customerData.streetNumber}
                  onChange={handleCustomerDataChange}
                />
                <input
                  type="text"
                  id="floor"
                  name="floor"
                  placeholder="Piso"
                  value={customerData.floor}
                  onChange={handleCustomerDataChange}
                />
                <input
                  type="text"
                  id="apartment"
                  name="apartment"
                  placeholder="Dpto"
                  value={customerData.apartment}
                  onChange={handleCustomerDataChange}
                />
                <input
                  type="text"
                  id="neighborhood"
                  name="neighborhood"
                  placeholder="Barrio"
                  value={customerData.neighborhood}
                  onChange={handleCustomerDataChange}
                />
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Teléfono"
                  value={customerData.phone}
                  onChange={handleCustomerDataChange}
                />
              </div>
            )}
          </div>
          <div className={styles.receiverData}>
            <div className={styles.dataHeader}>
              <label htmlFor="receiverData">
                <input
                  type="checkbox"
                  id="receiverData"
                  name="receiverData"
                  checked={showReceiverData}
                  onChange={toggleShowReceiverData}
                />
                Datos de Receptor
              </label>
            </div>
            {!showReceiverData && <p>Completar datos</p>}
            {showReceiverData && (
              <div className={styles.inputs}>
                <input
                  type="text"
                  id="receiverFullName"
                  name="fullName"
                  placeholder="Nombre Completo"
                  value={receiverData.fullName}
                  onChange={handleReceiverDataChange}
                />
              
                <input
                  type="text"
                  id="receiverStreet"
                  name="street"
                  placeholder="Calle"
                  value={receiverData.street}
                  onChange={handleReceiverDataChange}
                />
                <input
                  type="text"
                  id="receiverStreetNumber"
                  name="streetNumber"
                  placeholder="Número"
                  value={receiverData.streetNumber}
                  onChange={handleReceiverDataChange}
                />
                <input
                  type="text"
                  id="receiverFloor"
                  name="floor"
                  placeholder="Piso"
                  value={receiverData.floor}
                  onChange={handleReceiverDataChange}
                />
                <input
                  type="text"
                  id="receiverApartment"
                  name="apartment"
                  placeholder="Dpto"
                  value={receiverData.apartment}
                  onChange={handleReceiverDataChange}
                />
                <input
                  type="text"
                  id="receiverNeighborhood"
                  name="neighborhood"
                  placeholder="Barrio"
                  value={receiverData.neighborhood}
                  onChange={handleReceiverDataChange}
                />
                <input
                  type="text"
                  id="receiverPhone"
                  name="phone"
                  placeholder="Teléfono"
                  value={receiverData.phone}
                  onChange={handleReceiverDataChange}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="CommentBox">
        <h3>Observaciones / Comentarios</h3>
        <textarea placeholder="Puedes dejarnos el comentario que quieras, como también horarios y días que te encuentras en el lugar para enviártelo."></textarea>
      </div>
      <div className={styles.confirmation}>
        <h3>Confirmar datos</h3>
        <div className={styles.confirmationDetails}>
          {products.map((product) => (
            <div key={product.id} className={styles.confirmationProduct}>
              <span>{product.name}</span>
              <span>{product.quantity}</span>
              <span>${product.price * product.quantity}</span>
            </div>
          ))}
          <div>
            <h3>Como seguir pedido</h3>
            <p>
              En la sección "Mi cuenta" puedes ver el seguimiento de la compra
            </p>
          </div>
        </div>
        <div>
          <h3>Informaciones del pedido</h3>
          <span>EMAIL</span>
          <p>ejemplo@ejemplo.com</p>
        </div>
        { // Render the billing address section only if customerData has any non-empty fields
          Object.values(customerData).some(field => field !== '') ? (
            <div>
              <h3>Domicilio de Facturación</h3>
              <ul className={styles.listShipping}>
                <li>{customerData.fullName}</li>
                <li>
                  {customerData.street} {customerData.streetNumber} {customerData.apartment} {customerData.floor}
                </li>
                <li>{customerData.neighborhood}</li>
                <li>{customerData.phone}</li>
              </ul>
            </div>
          ) : (
            <div>
              <h3>Domicilio de Facturación</h3>
              <p>Rellenar datos</p>
            </div>
          )
        }
        <div>
          <h3>Forma de Entrega</h3>
          <p>
            {selectedDelivery === '' ? '' : selectedDelivery === 'homeDelivery' ? 'Envío a Domicilio' : 'Retirar por Depósito'}
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <Link to="/cart" className={`${styles.button} ${styles.buttonRight}`}>
            Regresar <img src={Left} alt="Left arrow" />
          </Link>
          <Link to="/purchase-completed" className={`${styles.button} ${styles.buttonLeft}`}>
            Terminar <img src={Right} alt="Right arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
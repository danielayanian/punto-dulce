import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './PaymentForm.module.css';
import Left from '../../../public/img/chevron-left.svg';
import Right from '../../../public/img/chevron-right.svg';

function PaymentForm({ products }) {
  const [editingCustomerData, setEditingCustomerData] = useState(false);
  const [editingReceiverData, setEditingReceiverData] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [selectedDelivery, setSelectedDelivery] = useState('');

  const toggleCustomerData = () => {
    setEditingCustomerData(!editingCustomerData);
    if (editingReceiverData) {
      setEditingReceiverData(false);
    }
  };

  const toggleReceiverData = () => {
    setEditingReceiverData(!editingReceiverData);
    if (editingCustomerData) {
      setEditingCustomerData(false);
    }
  };

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setSelectedDelivery(e.target.value);
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
            </div> {/* Aquí falta cerrar un div */}
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
                  checked={editingCustomerData}
                  onChange={toggleCustomerData}
                />
                Datos de Cliente
              </label>
              <span className={styles.editLink} onClick={toggleCustomerData}>
                {editingCustomerData ? 'Guardar' : 'Editar'}
              </span>
            </div>
            {editingCustomerData && (
              <div className={`${styles.hideInputs} ${styles.visible}`}>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Nombre Completo"
                />
                <input
                  type="text"
                  id="cellAddress"
                  name="cellAddress"
                  placeholder="Domicilio Celular"
                />
                <input
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Calle"
                />
                <input
                  type="text"
                  id="streetNumber"
                  name="streetNumber"
                  placeholder="Número"
                />
                <input type="text" id="floor" name="floor" placeholder="Piso" />
                <input
                  type="text"
                  id="apartment"
                  name="apartment"
                  placeholder="Dpto"
                />
                <input
                  type="text"
                  id="neighborhood"
                  name="neighborhood"
                  placeholder="Barrio"
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
                  checked={editingReceiverData}
                  onChange={toggleReceiverData}
                />
                Recibe otra persona
              </label>
              <span className={styles.editLink} onClick={toggleReceiverData}>
                {editingReceiverData ? 'Guardar' : 'Editar'}
              </span>
            </div>
            {editingReceiverData && (
              <div className={`${styles.hideInputs} ${styles.visible}`}>
                <input
                  type="text"
                  id="receiverName"
                  name="receiverName"
                  placeholder="Nombre Completo"
                />
                <input
                  type="text"
                  id="receiverAddress"
                  name="receiverAddress"
                  placeholder="Domicilio Celular"
                />
                <input
                  type="text"
                  id="receiverStreet"
                  name="receiverStreet"
                  placeholder="Calle"
                />
                <input
                  type="text"
                  id="receiverStreetNumber"
                  name="receiverStreetNumber"
                  placeholder="Número"
                />
                <input
                  type="text"
                  id="receiverFloor"
                  name="receiverFloor"
                  placeholder="Piso"
                />
                <input
                  type="text"
                  id="receiverApartment"
                  name="receiverApartment"
                  placeholder="Dpto"
                />
                <input
                  type="text"
                  id="receiverNeighborhood"
                  name="receiverNeighborhood"
                  placeholder="Barrio"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;


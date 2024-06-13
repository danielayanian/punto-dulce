import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './PaymentForm.module.css';
import Left from '../../../public/img/chevron-left.svg';
import Right from '../../../public/img/chevron-right.svg';

function PayRegistered({ products }) {
  // Objeto con datos del usuario
  const initialReceiverData = {
    fullName: 'Juan Pérez',
    phone: '+1234567890',
    street: 'Av. Ficticia',
    number: '123',
    floor: '4',
    apartment: 'A',
    neighborhood: 'Barrio Ficticio',
  };

  const initialUserData = {
    fullName: 'María García',
    Adress: 'Calle Ficticia 456',
    street: 'Av. Principal',
    streetNumber: '789',
    floor: '2',
    apartment: 'B',
    neighborhood: 'Otro Barrio Ficticio',
    phone:'+1234567890',
  };

  // Estado para los datos del usuario
  const [userData, setUserData] = useState(initialUserData);
  const [isEditingUserData, setIsEditingUserData] = useState(''); // Inicialmente seleccionado
  const [selectedPayment, setSelectedPayment] = useState('');
  const [selectedDelivery, setSelectedDelivery] = useState('');
  const [receiverData, setReceiverData] = useState(initialReceiverData);
  const [isCustomerDataChecked, setIsCustomerDataChecked] = useState(true);
  const [isReceiverDataChecked, setIsReceiverDataChecked] = useState(false);
  const [isEditingReceiverData, setIsEditingReceiverData] = useState(false);

  //   const handleReceiverDataChange = () => {
  //     setIsReceiverDataChecked(!isReceiverDataChecked);
  //   };

  const handleCheckboxEditReceiverData = () => {
    setIsEditingReceiverData(!isEditingReceiverData);
  };

  const handleEditUserData = () => {
    setIsEditingUserData(!isEditingUserData);
  };
  const handleEditReceiverData = () => {
    setIsEditingReceiverData(!isEditingReceiverData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setSelectedDelivery(e.target.value);
  };
  const handleCustomerDataChange = () => {
    setIsCustomerDataChecked(true);
    setIsReceiverDataChecked(false);
  };

  const handleReceiverDataChange = () => {
    setIsCustomerDataChecked(false);
    setIsReceiverDataChecked(true);
  };

  return (
    <>
      <div className="container">
        <div className={styles.buttonContainer}>
          <div className={styles.topRightButton}>
            <Link
              to="/cart"
              className={`${styles.button} ${styles.buttonRight}`}
            >
              Regresar <img src={Left} alt="Left arrow" />
            </Link>
          </div>
        </div>{' '}
        <h2 className="title">PRODUCTO</h2>
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
                  <span className={styles.detailTitle}>
                    Precio Total Minorista:
                  </span>
                  <span className={styles.detailValue}>
                    ${product.price * product.quantity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Payment form */}
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
                    <input
                      type="text"
                      placeholder="MM/AA"
                      className={styles.shortInput}
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className={styles.shortInput}
                    />
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
                    type="radio"
                    id="customerData"
                    name="customerData"
                    onChange={handleCustomerDataChange}
                    checked={isCustomerDataChecked}
                  />
                  Datos de Cliente
                </label>
                <span className={styles.editLink} onClick={handleEditUserData}>
                  {isEditingUserData ? 'Guardar' : 'Editar'}
                </span>
              </div>{' '}
              {!isEditingUserData && (
                <div className={styles.userDataList}>
                  <ul>
                    <li>Nombre: {userData.fullName}</li>
                    <li>Domicilio: {userData.Adress}</li>
                    <li>Calle: {userData.street}</li>
                    <li>Número: {userData.streetNumber}</li>
                    <li>Piso: {userData.floor}</li>
                    <li>Dpto: {userData.apartment}</li>
                    <li>Barrio: {userData.neighborhood}</li>
                  </ul>
                </div>
              )}
              {/* Inputs para editar los datos */}
              {isEditingUserData && (
                <div className={styles.inputsContainer}>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Nombre Completo"
                    value={userData.fullName}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    id="Adress"
                    name="Adress"
                    placeholder="Domicilio Celular"
                    value={userData.Adress}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    id="street"
                    name="street"
                    placeholder="Calle"
                    value={userData.street}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    id="streetNumber"
                    name="streetNumber"
                    placeholder="Número"
                    value={userData.streetNumber}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    id="floor"
                    name="floor"
                    placeholder="Piso"
                    value={userData.floor}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    id="apartment"
                    name="apartment"
                    placeholder="Dpto"
                    value={userData.apartment}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    id="neighborhood"
                    name="neighborhood"
                    placeholder="Barrio"
                    value={userData.neighborhood}
                    onChange={handleInputChange}
                  />
                </div>
              )}
            </div>
          </div>
          <div className={styles.shippingForm}>
            <div className={styles.receiverData}>
              <div className={styles.dataHeader}>
                <label htmlFor="receiverData">
                  <input
                    type="radio"
                    id="receiverData"
                    name="receiverData"
                    checked={isReceiverDataChecked}
                    onChange={handleReceiverDataChange}
                  />
                  Recibe otra persona
                </label>
                <span
                  className={styles.editLink}
                  onClick={handleCheckboxEditReceiverData}
                >
                  {isEditingReceiverData ? 'Guardar' : 'Editar'}
                </span>
              </div>
              {!isEditingReceiverData && (
                <div className={styles.userDataList}>
                  <ul>
                    <li>Nombre: {receiverData.fullName}</li>
                    <li>Celular: {receiverData.phone}</li>
                    <li>Calle: {receiverData.street}</li>
                    <li>Número: {receiverData.number}</li>
                    <li>Piso: {receiverData.floor}</li>
                    <li>Dpto: {receiverData.apartment}</li>
                    <li>Barrio: {receiverData.neighborhood}</li>
                  </ul>
                </div>
              )}
              {isEditingReceiverData && (
                <div className={styles.inputsContainer}>
                  <input
                    type="text"
                    id="receiverName"
                    name="fullName"
                    placeholder="Nombre Completo"
                    value={receiverData.fullName}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    id="receiverphone"
                    name="phone"
                    placeholder="Celular"
                    value={receiverData.phone}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    id="receiverStreet"
                    name="street"
                    placeholder="Calle"
                    value={receiverData.street}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    id="receiverNumber"
                    name="number"
                    placeholder="Número"
                    value={receiverData.number}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    id="receiverFloor"
                    name="floor"
                    placeholder="Piso"
                    value={receiverData.floor}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    id="receiverApartment"
                    name="apartment"
                    placeholder="Dpto"
                    value={receiverData.apartment}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    id="receiverNeighborhood"
                    name="neighborhood"
                    placeholder="Barrio"
                    value={receiverData.neighborhood}
                    onChange={handleInputChange}
                  />
                </div>
              )}
            </div>
          </div>{' '}
          <div className="CommentBox">
            {' '}
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
                  En la sección "Mi cuenta" puedes ver el seguimiento de la
                  compra
                </p>
              </div>
            </div>
            <div>
              <h3>Informaciones del pedido</h3>
              <span>EMAIL</span>
              <p>ejemplo@ejemplo.cpm</p>
            </div>
            <div>
              <h3>Domicilio de Facturación</h3>
              <ul>
                <li>{initialUserData.fullName}</li>
                <li>
                  {initialUserData.street}
                  {initialUserData.streetNumber}       {initialUserData.apartment}
                  {initialUserData.floor}
                </li>
           
                <li>{initialUserData.neighborhood}</li>
                <li>{initialUserData.phone}</li>
              </ul>
            </div>
            <div><h3>Froma de Entrega</h3>
            <p> {selectedDelivery === '' ? '' : (selectedDelivery === 'homeDelivery' ? 'Envío a Domicilio' : 'Retirar por Depósito')}</p>
            </div>
            <div className={styles.buttonContainer}>
              <Link
                to="/cart"
                className={`${styles.button} ${styles.buttonRight}`}
              >
                Regresar <img src={Left} alt="Left arrow" />
              </Link>
              <Link to="/" className={`${styles.button} ${styles.buttonLeft}`}>
                Pagar <img src={Right} alt="Right arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PayRegistered;

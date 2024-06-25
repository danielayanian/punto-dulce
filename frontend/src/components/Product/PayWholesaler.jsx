import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './PaymentForm.module.css';
import Left from '/img/chevron-left.svg';
import Right from '/img/chevron-right.svg';
import EditPopUp from './EditPopUp';
import ProductCartList from '../Cart/ProductCartList';

function PayWholesaler({ products }) {
  const initialUserData = {
    fullName: 'María García',
    Adress: 'Calle Ficticia 456',
    street: 'Av. Principal',
    streetNumber: '789',
    floor: '2',
    apartment: 'B',
    neighborhood: 'Otro Barrio Ficticio',
    phone: '+1234567890',
    Condition: 'Responsable Inscripto',
    Company: 'ABC Distribuciones S.A',
    CUIT: '30-12345678-9',
  };

  // Estado para los datos del usuario
  const [userData, setUserData] = useState(initialUserData);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [selectedDelivery, setSelectedDelivery] = useState('');
  const [receiverData, setReceiverData] = useState([]);
  const [isCustomerDataChecked, setIsCustomerDataChecked] = useState(true);
  const [isReceiverDataChecked, setIsReceiverDataChecked] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    console.log('Guardando cambios:', userData);

    setIsPopupOpen(false);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const openEditPopup = () => {
    setIsPopupOpen(true);
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
  console.log("wholesaler" + products);
  return (
    <><div className={styles.cartContainer}>
      <div >
        <div className={styles.buttonContain}>
          <div className={styles.topRightButton}>
            <Link
              to="/cart"
              className={`${styles.buttonCart} ${styles.buttonRight}`}
            >
              Regresar <img src={Left} alt="Left arrow" />
            </Link>
          </div>
        </div>{' '}
        <h2 className="title">PRODUCTO</h2>
        {/* <div className={styles.cartContainer}>
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
        </div> */}
        <ProductCartList data={products} />
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
                  Datos Mayorista
                </label>
                <span className={styles.editLink} onClick={openEditPopup}>
                  Editar
                </span>
              </div>{' '}
              {!isPopupOpen && (
                <div className={styles.userDataList}>
                  <ul>
                    <li>Nombre Completo: {userData.fullName}</li>
                    <li>
                      Domicilio: {userData.address}
                      {userData.streetNumber}
                    </li>
                    <li>
                      Piso y Depto: {userData.floor}
                      {userData.apartment}
                    </li>
                    <li>Barrio: {userData.neighborhood}</li>
                    <li>Celular:{userData.phone} </li>
                    <li>Cond.Frente al IVA:{userData.Condition} </li>
                    <li>Razón Social:{userData.Company}</li>
                    <li>CUIT:{userData.CUIT}</li>
                  </ul>
                </div>
              )}
              {isPopupOpen && (
                <EditPopUp
                  isOpen={isPopupOpen}
                  onClose={handleClosePopup}
                  data={userData}
                  handleInputChange={handleInputChange}
                  saveChanges={handleSaveChanges}
                  type="wholesale" // Cambia a "wholesale" si estás editando datos del mayorista
                />
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
              </div>
              {!isReceiverDataChecked && <p>Completar datos</p>}
              {isReceiverDataChecked && (
                <div className={styles.inputsContainer}>
                  <label htmlFor="">Nombre</label>
                  <input
                    type="text"
                    id="receiverName"
                    name="fullName"
                    placeholder="Nombre Completo"
                    value={receiverData.fullName}
                    onChange={handleInputChange}
                  />

                  <label htmlFor="neigthborhood">Barrio</label>
                  <input
                    type="text"
                    id="receiverNeighborhood"
                    name="neighborhood"
                    placeholder="Barrio"
                    value={receiverData.neighborhood}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="phone">Celular</label>
                  <input
                    type="text"
                    id="receiverphone"
                    name="phone"
                    placeholder="Celular"
                    value={receiverData.phone}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="">Cond.Frente al IVA</label>
                  <input
                    type="text"
                    id="Condition"
                    name="Condition"
                    placeholder="Cond.Frente al IVA"
                    value={receiverData.condition}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="Company">Razón Social</label>
                  <input
                    type="text"
                    id="Company"
                    name="Company"
                    placeholder="Razón Social"
                    value={receiverData.Condition}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="CUIT">CUIT</label>
                  <input
                    type="text"
                    id="CUIT"
                    name="CUIT"
                    placeholder="CUIT"
                    value={receiverData.CUIT}
                    onChange={handleInputChange}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="CommentBox">
            <h3>Observaciones / Comentarios</h3>
            <textarea placeholder="Puedes dejarnos el comentario que quieras, como también horarios y días que te encuentras en el lugar para enviártelo."></textarea>
          </div>
          <div className={styles.confirmation}>
            <h3>Confirmar datos</h3>
            <div className={styles.confirmationDetails}>
              {products.map((product,index) => (
                <div  key={`${product.id?? 'unknown'}-${index}`} className={styles.confirmationProduct}>
                  <span>{product.name}</span>
                  <span>{product.quantity}</span>
                  <span>${product.price * product.quantity}</span>
                </div>
              ))}
              <div>
                <h3>Como seguir pedido</h3>
                <p>
                  En la sección &#34;Mi cuenta&#34; puedes ver el seguimiento de la
                  compra
                </p>
              </div>
            </div>
            <div>
              <h3>Informaciones del pedido</h3>
              <span>EMAIL</span>
              <p>ejemplo@ejemplo.com</p>
            </div>
            <div>
              <h3>Domicilio de Facturación</h3>
              <ul className={styles.listShipping}>
                <li>{initialUserData.fullName}</li>
                <li>
                  {initialUserData.street}
                  {initialUserData.streetNumber} {initialUserData.apartment}
                  {initialUserData.floor}
                </li>

                <li>{initialUserData.neighborhood}</li>
                <li>{initialUserData.phone}</li>
              </ul>
            </div>
            <div>
              <h3>Froma de Entrega</h3>
              <p>
                {' '}
                {selectedDelivery === ''
                  ? ''
                  : selectedDelivery === 'homeDelivery'
                  ? 'Envío a Domicilio'
                  : 'Retirar por Depósito'}
              </p>
            </div>
            <div className={styles.buttonContain}>
              <Link
                to="/cart"
                className={`${styles.buttonCart} ${styles.buttonR}`}
              >
                Regresar <img src={Left} alt="Left arrow" />
              </Link>
              <Link
                to="/purchase-completed"
                className={`${styles.buttonCart} ${styles.buttonL}`}
              >
                Terminar <img src={Right} alt="Right arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div></div>
    </>
  );
}

export default PayWholesaler;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './PaymentForm.module.css';

function PaymentForm({ products }) {
  const [editingCustomerData, setEditingCustomerData] = useState(false);
  const [editingReceiverData, setEditingReceiverData] = useState(false);

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

  return (
    <div className={styles.container}>
      {/* Button to return to product cart */}
      <div className={styles.topRightButton}>
        <Link to="/home" className={styles.button}>
          Regresar
        </Link>
      </div>

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

          <div>
            <input type="checkbox" id="debitCard" name="debitCard" />
            <label htmlFor="debitCard">Tarjetas de débito </label>

            <div className={styles.inputs}>
              <input type="text" placeholder="Número de tarjeta" />
              <div className={styles.expiry}>
                <input type="text" placeholder="MM/AA              CVC" />
              </div>
            </div>
          </div>
          <div>
            <input type="checkbox" id="dniAccount" name="dniAccount" />
            <label htmlFor="dniAccount">Mi cuenta DNI</label>
          </div>
          <span>QR image</span>
          <div>
            <input type="checkbox" id="cash" name="cash" />
            <label htmlFor="cash">Efectivo</label>
          </div>
          <div>
            <input type="checkbox" id="mercadopago" name="mercadopago" />
            <label htmlFor="mercadopago">
              Mercado de Pago
              <div>
                <a className={styles.yellowLink} href="mercadoPagoLink">
                  Ir a Mercado de Pago
                </a>
              </div>
            </label>
          </div>
          <div>
            <input type="checkbox" id="transfer" name="transfer" />
            <label htmlFor="transfer">Transferencia</label>
          </div>
          <p className={styles.wsp}>Los Datos se envían por Whatsapp</p>
        </div>
        <h3>Formas de Entregas</h3>
        <div>
          <div>
            <input type="checkbox" id="homeDelivery" name="homeDelivery" />
            <label htmlFor="homeDelivery">Envío a Domicilio</label>
          </div>
          <p>Envío sin cargo</p>{' '}
        </div>
        <div>
          <div>
            <input type="checkbox" id="deposit" />
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
                {' '}
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
              <div className={`${styles.inputs} ${styles.visible}`}>
                <input
                  type="text"
                  id="receiverName"
                  name="receiverName"
                  placeholder="Nombre"
                />
                <input
                  type="text"
                  id="receiverLastName"
                  name="receiverLastName"
                  placeholder="Apellido"
                />
                <input
                  type="text"
                  id="receiverCell"
                  name="receiverCell"
                  placeholder="Celular/WhatsApp"
                />
                <input
                  type="text"
                  id="receiverStreet"
                  name="receiverStreet"
                  placeholder="Calle"
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
                  placeholder="Departamento"
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
          <h3>Observaciones / Comentarios</h3>
          <textarea placeholder="Puedes dejarnos el comentario que quieras, como también horarios y días que te encuentras en el lugar para enviártelo."></textarea>
        </div>
        {/* Confirm details */}
        <div className={styles.confirmation}>
          <h3>Confirmar datos</h3>
          <div className={styles.confirmationDetails}>
            {products.map((product) => (
              <div key={product.id} className={styles.confirmationProduct}>
                <img src={product.imageUrl} alt={product.name} />
                <div>
                  <div className={styles.confirmationProductName}>
                    {product.name}
                  </div>
                  <div className={styles.confirmationProductDescription}>
                    {product.description}
                  </div>
                  <div className={styles.confirmationProductPrice}>
                    <span>Precio Final Minorista:</span>
                    <span>${product.price * product.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3>Cómo seguir el pedido</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          {/* Informaciones del pedido */}
          <h3>Informaciones del pedido</h3>
          <h4>E-mail</h4>
          <p>xxx@xxx</p>
          <h4>Domicilio de Facturación y Entrega</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h4>Forma de Entrega</h4>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;

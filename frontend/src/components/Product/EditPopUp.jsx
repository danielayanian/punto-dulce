/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react';
import styles from './EditPopUp.module.css'; // Asegúrate de que coincida con el nombre real de tu archivo CSS
import { FaPencilAlt , FaSave  } from 'react-icons/fa';


const EditPopup = ({
  isOpen,
  onClose,
  data,
  handleInputChange,
  saveChanges,
  type,
}) => {
  return (
    isOpen && (
      <div className={styles.popupOverlay}>
        <div className={styles.popupContainer}>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
          <h2>
            <FaPencilAlt /> MODIFICAR DATOS
          </h2>
          <label className={styles.label} htmlFor="fullName">
            Nombre Completo <span className={styles.span}>*</span>
          </label>
          <input
            className={styles.inputForm}
            type="text"
            id={`${type}FullName`}
            name="fullName"
            placeholder="Nombre Completo"
            value={data.fullName}
            onChange={handleInputChange}
          />
          {type === 'user' && (
            <>
              <label className={styles.label} htmlFor="dni">
                DNI <span className={styles.span}>*</span>
              </label>{' '}
              <input
                className={styles.inputForm}
                type="text"
                id={`${type}DNI`}
                name="dni"
                placeholder="DNI"
                value={data.DNI}
                onChange={handleInputChange}
              />
            </>
          )}
          <label className={styles.label} htmlFor="street">
            Domicilio <span className={styles.span}>*</span>
          </label>{' '}
          <input
            className={styles.inputForm}
            type="text"
            id={`${type}Street`}
            name="street"
            placeholder="Domicilio"
            value={data.street}
            onChange={handleInputChange}
          />{' '}
          {type === 'user' && (
            <>
              <label className={styles.label} htmlFor="floor">
                Piso y Dpto <span className={styles.span}>*</span>
              </label>
              <input
                className={styles.inputForm}
                type="text"
                id={`${type}Floor`}
                name="floor"
                placeholder="Piso"
                value={data.floor}
                onChange={handleInputChange}
              />

              <input
                className={styles.inputForm}
                type="text"
                id={`${type}Apartment`}
                name="apartment"
                placeholder="Dpto"
                value={data.apartment}
                onChange={handleInputChange}
              />
            </>
          )}
          <label className={styles.label} htmlFor="neighborhood">
            Barrio<span className={styles.span}>*</span>
          </label>
          <input
            className={styles.inputForm}
            type="text"
            id={`${type}Neighborhood`}
            name="neighborhood"
            placeholder="Barrio"
            value={data.neighborhood}
            onChange={handleInputChange}
          />
          <label className={styles.label} htmlFor="phone">
            Celular <span className={styles.span}>*</span>
          </label>
          <input
            className={styles.inputForm}
            type="text"
            id={`${type}Phone`}
            name="phone"
            placeholder="Teléfono"
            value={data.phone}
            onChange={handleInputChange}
          />
          {type === 'wholesale' && (
            <>
              <label className={styles.label} htmlFor="company">
                Razón Social <span className={styles.span}>*</span>
              </label>
              <input
                className={styles.inputForm}
                type="text"
                id={`${type}Company`}
                name="company"
                placeholder="Razón Social"
                value={data.Company}
                onChange={handleInputChange}
              />
              <label className={styles.label} htmlFor="cuit">
                CUIT <span className={styles.span}>*</span>
              </label>
              <input
                className={styles.inputForm}
                type="text"
                id={`${type}CUIT`}
                name="cuit"
                placeholder="CUIT"
                value={data.CUIT}
                onChange={handleInputChange}
              />
            </>
          )}
          <div className={styles.saveButton}>
          <button className={styles.buttonSave} onClick={saveChanges}>  <FaSave className={styles.iconPop}/>Guardar</button>
          </div>
        </div>
      </div>
    )
  );
};

export default EditPopup;

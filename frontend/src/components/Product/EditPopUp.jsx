/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react';
import styles from './EditPopUp.module.css'; // Ensure this matches your actual file name
import { FaPencilAlt } from 'react-icons/fa'; 
const EditPopup = ({ isOpen, onClose, data, handleInputChange, saveChanges, type }) => {
  return (
    isOpen && (
      <div className={styles.popupOverlay}>
        <div className={styles.popupContainer}>
          <button className={styles.closeButton} onClick={onClose}>×</button>
          <h2>  <FaPencilAlt />MODIFICAR DATOS</h2> <input
            type="text"
            id={`${type}FullName`}
            name="fullName"
            placeholder="Nombre Completo"
            value={data.fullName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            id={`${type}Phone`}
            name="phone"
            placeholder="Teléfono"
            value={data.phone}
            onChange={handleInputChange}
          />
          <input
            type="text"
            id={`${type}Street`}
            name="street"
            placeholder="Calle"
            value={data.street}
            onChange={handleInputChange}
          />
          <input
            type="text"
            id={`${type}Number`}
            name="number"
            placeholder="Número"
            value={data.number}
            onChange={handleInputChange}
          />
          <input
            type="text"
            id={`${type}Floor`}
            name="floor"
            placeholder="Piso"
            value={data.floor}
            onChange={handleInputChange}
          />
          <input
            type="text"
            id={`${type}Apartment`}
            name="apartment"
            placeholder="Dpto"
            value={data.apartment}
            onChange={handleInputChange}
          />
          <input
            type="text"
            id={`${type}Neighborhood`}
            name="neighborhood"
            placeholder="Barrio"
            value={data.neighborhood}
            onChange={handleInputChange}
          />
        </div>
      </div>
    )
  );
};

export default EditPopup;

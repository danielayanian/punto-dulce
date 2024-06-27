import React from 'react';
import styles from './LoginPopup.module.css';
import { Link } from 'react-router-dom';

const LoginPopup = ({ onClose }) => {
  const handleLoginClick = () => {
    onClose(); // Cerrar el popup
  };

  return (
    <div className={styles.loginOverlay}>
      <div className={styles.loginPopup}>
       <Link to="/login"  onClick={handleLoginClick} ><h2 className={styles.loginTitle}>Iniciar sesión requerido</h2></Link>
        <p className={styles.loginMessage}>Debes iniciar sesión para acceder al carrito.</p>
       
        <button className={styles.closeButton} onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default LoginPopup;

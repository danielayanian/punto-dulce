import React from 'react';
import styles from './LoginPopup.module.css';
import { Link } from 'react-router-dom';

const LoginPopup = ({ onClose }) => {
  return (
    <div className={styles.loginOverlay}>
      <div className={styles.loginPopup}>
        <span className={styles.closeIcon} onClick={onClose}>&times;</span>
        <span className={styles.iconWink}>😉</span>
        <Link to="/login" onClick={onClose}>
          <h2 className={styles.loginTitle}>INICIAR SESIÓN</h2>
        </Link>
        <p className={styles.loginMessage}>Debes iniciar sesión para acceder al carrito.</p>
      </div>
    </div>
  );
};

export default LoginPopup;

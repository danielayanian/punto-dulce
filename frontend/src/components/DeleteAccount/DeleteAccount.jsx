import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import styles from './DeleteAccount.module.css';

const DeleteAccount = ({ onCancel }) => {
  return (
    <div className={styles.deleteContent}>
      <div className={styles.deleteAccount}>
        <FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#cb2a2a" }} size='2xl' onClick={onCancel} className={styles.closeIcon} />
        <span className={styles.titleDelete}>ELIMINADA LA CUENTA</span>
        <p className={styles.message}>Acabas de eliminar tu cuenta.</p>
      </div>
    </div>
  );
};

export default DeleteAccount;

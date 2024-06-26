import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faCheckCircle, faTimes, faTrash, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import InputField from "../InputField/InputField";
import styles from "./ProfileAdmi.module.css";
import DeleteAccount from '../DeleteAccount/DeleteAccount';

const ProfileAdmi = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    currency: "",
    timezone: "",
    language: "",
    image: ""
  });

  const [formCompleted, setFormCompleted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [requestedDelete, setRequestedDelete] = useState(false);

  const cancelPopupRef = useRef(null);

  useEffect(() => {
    if (
      profile.name &&
      profile.email &&
      profile.password &&
      profile.currency &&
      profile.timezone &&
      profile.language &&
      profile.image
    ) {
      setFormCompleted(true);
    } else {
      setFormCompleted(false);
    }
  }, [profile]);

  useEffect(() => {
    if (showCancelPopup && cancelPopupRef.current) {
      cancelPopupRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [showCancelPopup]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: files ? files[0].name : value
    }));

    setFormSubmitted(false);
  };

  const handleFileClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formCompleted) {
      setFormSubmitted(true);

      // Resetear el formulario después de mostrar el mensaje de éxito
      setProfile({
        name: "",
        email: "",
        password: "",
        currency: "",
        timezone: "",
        language: "",
        image: ""
      });
      setFormCompleted(false);
    }
  };

  const handleCancel = () => {
    setShowCancelPopup(true);
  };

  const handleConfirmCancel = () => {
    setShowCancelPopup(false);
    setProfile({
      name: "",
      email: "",
      password: "",
      currency: "",
      timezone: "",
      language: "",
      image: ""
    });
  };

  const handleCloseCancelPopup = () => {
    setShowCancelPopup(false);
    setProfile({
      name: "",
      email: "",
      password: "",
      currency: "",
      timezone: "",
      language: "",
      image: ""
    });
  };

  const handleRemoveImage = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      image: ""
    }));
  };

  const handleDeleteAccount = () => {
    setRequestedDelete(true);
  };

  const handleCloseDeletePopup = () => {
    setRequestedDelete(false);
  };

  const handleCloseMessage = () => {
    setFormSubmitted(false);
  };

  return (
    <div className={styles.profileAdmi}>
    {showCancelPopup && <div className={styles.overlay}></div>}
    <div className={`${styles.profileAdmi} ${showCancelPopup ? styles.profileAdmiBlurred : ''}`}>
        {!requestedDelete && (
          <div>
            <h2 className={styles.title}>Mi Perfil</h2>
            <div className={styles.profilePicture}>
              <img src="" className={styles.logo} alt="" />
              <p className={styles.titleProfile}>{profile.name || "Nombre"}</p>
              <p>{profile.email || "alexasiri@gmail.com"}</p>
              <button className={styles.buttonDelete} onClick={handleDeleteAccount}>Eliminar cuenta</button>
            </div>
            <form className={styles.profileForm} onSubmit={handleSubmit}>
              <InputField
                label="Nombre"
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                required={true}
                placeholder="Texto"
              />
              <InputField
                label="Dirección correo electrónico"
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="example@example.com"
                required={true}
                icon={<FontAwesomeIcon icon={faEnvelope} />}
              />
              <InputField
                label="Contraseña"
                type="password"
                name="password"
                value={profile.password}
                onChange={handleChange}
                required={true}
                placeholder="2a2a2a"
                icon={<FontAwesomeIcon icon={faLock} />}
              />
              <div className={styles.inputField}>
                <label>
                  Divisa
                  <span className={styles.requiredAsterisk}> *</span>
                </label>
                <div className={styles.selectWrapper}>
                  <select
                    name="currency"
                    value={profile.currency}
                    onChange={handleChange}
                    className={styles.selectStyled}
                    required={true}
                  >
                    <option value="" disabled>Texto</option>
                    <option value="Peso Argentino">Peso Argentino</option>
                    <option value="Dólar">Dólar Americano</option>
                    <option value="Euro">Euro</option>
                  </select>
                  <FontAwesomeIcon icon={faChevronDown} className={styles.selectArrow} />
                </div>
              </div>
              <div className={styles.inputField}>
                <label>Zona horaria</label>
                <div className={styles.selectWrapper}>
                  <select
                    name="timezone"
                    value={profile.timezone}
                    onChange={handleChange}
                    className={styles.selectStyled}
                  >
                    <option value="" disabled>Texto</option>
                    <option value="GMT-3">GMT-3</option>
                    <option value="GMT-4">GMT-4</option>
                    <option value="GMT-5">GMT-5</option>
                  </select>
                  <FontAwesomeIcon icon={faChevronDown} className={styles.selectArrow} />
                </div>
              </div>
              <div className={styles.inputField}>
                <label>Idioma</label>
                <div className={styles.selectWrapper}>
                  <select
                    name="language"
                    value={profile.language}
                    onChange={handleChange}
                    className={styles.selectStyled}
                  >
                    <option value="" disabled>Texto</option>
                    <option value="Español">Español</option>
                    <option value="Inglés">Inglés</option>
                    <option value="Francés">Francés</option>
                  </select>
                  <FontAwesomeIcon icon={faChevronDown} className={styles.selectArrow} />
                </div>
              </div>
              <div className={styles.inputField}>
                <label>Imagen</label>
                <div className={styles.fileInputWrapper}>
                  <input
                    type="file"
                    id="fileInput"
                    name="image"
                    style={{ display: 'none' }}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    value={profile.image}
                    readOnly
                    className={styles.inputImage}
                  />
                  <button type="button" onClick={handleFileClick} className={styles.uploadButton}>Subir</button>
                </div>
                {profile.image && (
                  <div className={styles.imagePreview}>
                    <span>{profile.image}</span>
                    <FontAwesomeIcon icon={faTrash} onClick={handleRemoveImage} className={styles.removeIcon} />
                  </div>
                )}
              </div>
              <div className={styles.buttonContent}>
                {formSubmitted && (
                  <div className={styles.successMessage}>
                    <FontAwesomeIcon icon={faCheckCircle} className={styles.successIcon} />
                    Acabas de guardar con éxito los datos.
                    <FontAwesomeIcon icon={faTimes} className={styles.closeIcon} onClick={handleCloseMessage} />
                  </div>
                )}
                <button className={`${styles.buttonSubmit} ${formCompleted ? styles.buttonSubmitCompleted : ''}`} type="submit">Guardar</button>
                <button className={styles.buttonCancel} type="button" onClick={handleCancel}>Cancelar</button>
              </div>
            </form>
            {showCancelPopup && (
              <div ref={cancelPopupRef} className={styles.cancelPopup}>
                <p className={styles.popTitle}>¿Deseas cancelar los cambios realizados?</p>
                <p className={styles.popCancel}>Estás a punto de cancelar los cambios que has realizado</p>
                <div className={styles.separatorLine}></div>
                <button className={styles.cancelButton} onClick={handleConfirmCancel}>Cancelar</button>
                <button className={styles.okButton} onClick={handleCloseCancelPopup}>Ok</button>
              </div>
            )}
          </div>
        )}
        {requestedDelete && (
          <div className={styles.deletePopup}>
            <DeleteAccount onCancel={handleCloseDeletePopup} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileAdmi;

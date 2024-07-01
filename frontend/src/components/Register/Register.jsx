import React, { useState, useEffect, useContext } from 'react';
import styles from '../../components/LoginInput/LoginInput.module.css';
import wspStyles from '../../components/WhatsApp/Wsp.module.css';
import logo from "/img/logo.png";
import logo2 from "/img/caramelos.png";
import burbuja from "/img/burbuja.png";
import burbuja2 from "/img/burbujas.png";
import burbuja3 from "/img/bur-car.png";
import { validateEmail, validatePassword} from '../Utils/Validation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faCircleCheck, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { urls } from '../../helpers/url';
import AuthContext from "../AuthContext/AuthContext";

const RegisterInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate(); 
  const location = useLocation();
  const { login } = useContext(AuthContext); 
  
  useEffect(() => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const wspContainer = document.querySelector(`.${wspStyles.container}`); 

    if (header) header.style.display = "none";
    if (footer) footer.style.display = "none";
    if (wspContainer) wspContainer.style.display = "none"; 
    return () => {
      if (header) header.style.display = "";
      if (footer) footer.style.display = "";
      if (wspContainer) wspContainer.style.display = ""; 
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    
    if (!email) {
      validationErrors.email = "El campo email es requerido";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Email no es válido";
    }

    if (!password) {
      validationErrors.password = "El campo contraseña es requerido";
    } else if (!validatePassword(password)) {
      validationErrors.password = "Contraseña Invalida";
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword = "El campo contraseña es requerido";
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      fetch(urls.register, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password, confirmPassword }),
      })
        .then((response) => {
          if (response.ok && response.status === 204) {
            const token = response.headers.get('Authorization');
            if (token) {
              const jwt = token.replace('Bearer ', ''); 
              localStorage.setItem('jwt', jwt);
              login(email, jwt);
              const from = location.state?.from || '/'; 
              navigate(from); 
            } else {
              setErrors({ form: 'No se ha recibido el token de autenticación' });
            }
          } else {
            return response.json().then((errorData) => {
              setErrors({ form: errorData.message || 'Error en el registro' });
            });
          }
        })
        .catch((error) => {
          setErrors({ form: 'Error de servidor' });
        });
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      const newErrors = { ...errors };
      delete newErrors.email;
      setErrors(newErrors);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) {
      const newErrors = { ...errors };
      delete newErrors.password;
      setErrors(newErrors);
    }
  };

  return (
    <section className={styles.container}>
      <img src={burbuja} alt="" className={styles.candyContent} />
      <img src={burbuja2} alt="" className={styles.bubble2} />
      <img src={logo} alt="logo de la pagina" className={styles.logo} />
      <img src={burbuja3} alt="" className={styles.bubble3} />
      <h1 className={styles.title}>Sign up</h1>
      <form onSubmit={handleSubmit} noValidate>
      
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <div className={styles.passwordWrapper}>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className={errors.email ? styles.errorInput : ""}
            />
            {errors.email && (
              <div className={`${styles.passwordToggle} ${styles.error}`}>
                <FontAwesomeIcon icon={faTimesCircle} />
              </div>
            )}
          </div>
          {errors.email && (
            <span className={styles.helperMessage}>{errors.email}</span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Contraseña </label>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? styles.errorInput : ''}
            />
            <div className={styles.iconWrapper}>
              {errors.password && (
                <div className={`${styles.errorIcon}`}>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </div>
              )}
              <div
                className={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </div>
            </div>
          </div>
          {errors.password && (
            <span className={styles.helperMessage}>{errors.password}</span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword">Confirmar Contraseña </label>
          <div className={styles.passwordWrapper}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirmar Contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={errors.confirmPassword ? styles.errorInput : ''}
            />
            <div className={styles.iconWrapper}>
              {errors.confirmPassword && (
                <div className={`${styles.errorIcon}`}>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </div>
              )}
              <div
                className={styles.passwordToggle}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
              </div>
            </div>
          </div>
          {errors.confirmPassword && (
            <span className={styles.helperMessage}>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.passwordRequirements}>
          <span className={styles.titleError}>Las contraseñas debe contener:</span>
          <ul>
            <li>8 caracteres</li>
            <li>Una Minúscula</li>
            <li>Una Mayúscula</li>
            <li>Un carácter especial $%!"?)(/&</li>
          </ul>
          </div>

        <button className={styles.access}>
        <FontAwesomeIcon icon={faCircleCheck} /> Registrar
        </button>
       <Link to="/login" className={styles.returnLink} >
        Ya tienes una cuenta? Regresar!</Link> 
      </form>
      <img src={logo2} />
    </section>
  );
};

export default RegisterInput;

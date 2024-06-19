import React, { useState } from "react";
import styles from "./LoginInput.module.css";
import { validateEmail, validatePassword } from "../Utils/Validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faTimesCircle, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const LoginInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) {
      newErrors.email = "El campo email es requerido";
    } else if (!validateEmail(email)) {
      newErrors.email = "Email inválido";
    }
    if (!password) {
      newErrors.password = "El campo contraseña es requerido";
    } else if (!validatePassword(password)) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // console.log("Formulario enviado");
    }
  };


  return (
    <section className={styles.container}>
      <img className={styles.logo} src="../../../public/img/logo.png"  alt="logo de la página" />
      <div className={styles.loginBox}></div>
        <h1 className={styles.title}>Log in</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email </label>

            <div className={styles.passwordWrapper}>
            <input 
            type="email" 
            id="email"
            placeholder="Email"  
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? styles.errorInput : ""}/>
             {errors.email && (
              <div className={styles.passwordToggle}>
                <FontAwesomeIcon icon={faTimesCircle} />
              </div>
            )}
          </div>
            {errors.email && <span className={styles.helperMessage}>{errors.email}</span>}
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
            className={errors.password ? styles.errorInput : ""}/>
             <div
              type="button"
              className={styles.passwordToggle}
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </div>
            </div>
             {errors.password && <span className={styles.helperMessage}>{errors.password}</span>}
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="password" />
            <label htmlFor="password">Guardar Contraseña</label>
          </div>
          <div className={styles.links}>
            <a href="/">Has perdido la contraseña?  <span className={styles.underline}>Recuperar</span></a>
            <Link to="/register">No tienes una cuenta?  <span className={styles.underline}>Registrate ahora!</span> </Link>
          </div>
            <button className={styles.access}>
            <FontAwesomeIcon icon={faRightToBracket} /> Acceder
            </button>
          
        </form>
      
    </section>
  );
};

export default LoginInput;

import React, { useState } from "react";
import styles from "./LoginInput.module.css";
import { validateEmail, validatePassword } from "../Utils/Validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faTimesCircle, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { urls } from "../../helpers/url";


const LoginInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 
  const location = useLocation();

  const handleSubmit = async (e) => {
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
      try {
        const response = await fetch(urls.login, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const token = response.headers.get('Authorization');
          if (token) {
            const jwt = token.replace('Bearer ', '');
            localStorage.setItem('jwt', jwt); 
            
            const from = location.state?.from || '/'; 
            
            navigate(from); 
          } else {
            throw new Error('No se ha recibido el token de autenticación')
          }
        } else {
          setErrors({ form: 'Credenciales incorrectas' });
        }
      } catch (error) {
        setErrors({ form: 'Error de servidor' });
      }
    }
  };


  return (
    <section className={styles.container}>
      <img className={styles.logo} src="/img/logo.png"  alt="logo de la página" />
      <div className={styles.loginBox}></div>
        <h1 className={styles.title}>Log in</h1>
        <form className={styles.formLogin}onSubmit={handleSubmit}>
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
            <input type="checkbox" id="savePassword" />
            <label htmlFor="password">Guardar Contraseña</label>
          </div>
          <div className={styles.links}>
            <a href="/">Has perdido la contraseña?  <span className={styles.underline}>Recuperar</span></a>
            <Link to="/register">No tienes una cuenta?  <span className={styles.underline}>Registrate ahora!</span> </Link>
          </div>
            <button type="submit" className={styles.access}>
            <FontAwesomeIcon icon={faRightToBracket} /> Acceder
            </button>
          
        </form>
      
    </section>
  );
};

export default LoginInput;

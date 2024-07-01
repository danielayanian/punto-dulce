import React, { useState, useEffect, useContext } from "react";
import styles from "./LoginInput.module.css";
import wspStyles from '../../components/WhatsApp/Wsp.module.css';
import logo from "/img/logo.png";
import logo2 from "/img/caramelos.png";
import burbuja from "/img/burbuja.png";
import burbuja2 from "/img/burbujas.png";
import burbuja3 from "/img/bur-car.png";
import baston from "/img/baston.png";
import { validateEmail, validatePassword } from "../Utils/Validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faTimesCircle,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { urls } from "../../helpers/url";
import AuthContext from "../AuthContext/AuthContext"; 


const LoginInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
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
      newErrors.password = "La contraseña es incorrecta";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch(urls.login, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const token = response.headers.get("Authorization");
          if (token) {
            const jwt = token.replace("Bearer ", "");
            localStorage.setItem("jwt", jwt);
            login(email, jwt);
            const from = location.state?.from || "/";
            navigate(from);
          } else {
            throw new Error("No se ha recibido el token de autenticación");
          }
        } else {
          setErrors({ form: "Credenciales incorrectas" });
        }
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        setErrors({ form: "Error de servidor" });
      }
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
       <div>
       <div className={styles.bubbles}>
      <img src={burbuja} alt="" className={styles.bubble1} />
      <img src={burbuja2} alt=""  className={styles.bubble2}/>
      </div>
      <img src={logo} alt="logo de la pagina" className={styles.logoLogin} />
      </div>
      <div className={styles.loginBox}></div>  
      <div className={styles.candy}>
      <img src={burbuja3} alt="" className={styles.candy1}/> 
      <img src={baston} alt="" className={styles.candy2} />
      </div>
      <h1 className={styles.title}>Log in</h1>
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
          <label htmlFor="password">Contraseña</label>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? styles.errorInput : ""}
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

        <div className={styles.checkboxGroup}>
          <input type="checkbox" id="savePassword" />
          <label htmlFor="savePassword">Guardar Contraseña</label>
        </div>

        <div className={styles.links}>
          <a href="/">
            ¿Has perdido la contraseña?{" "}
            <span className={styles.underline}>Recuperar</span>
          </a>
          <Link to="/register">
            ¿No tienes una cuenta?{" "}
            <span className={styles.underline}>Regístrate ahora!</span>
          </Link>
        </div>

        <button type="submit" className={styles.access}>
          <FontAwesomeIcon icon={faRightToBracket} /> Acceder
        </button>
      </form>
      {errors.form && <div className={styles.helperMessage}>{errors.form}</div>}
      <img src={logo2} />
    </section>
  );
};

export default LoginInput;

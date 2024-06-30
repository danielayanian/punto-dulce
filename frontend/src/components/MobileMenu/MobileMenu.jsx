import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./MobileMenu.module.css";
import filter from "/img/Filter.svg";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSearch, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../AuthContext/AuthContext";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, userEmail, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/");
    toggleMenu();
  };
 
  return (
    <>
      {isOpen && <div className={styles.overlay}></div>}
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          <img src="/img/icon-arg.svg" alt="icono" />
          <button className={styles.closeButton} onClick={toggleMenu}>
            X
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.authLinks}>
            <FontAwesomeIcon icon={faCircleUser} size="xl" />
            {isAuthenticated ? (
              <div className={styles.authUser}>
                {userEmail && <span>{userEmail}</span>}
                <span>MI CUENTA</span>
              </div>
            ) : (
              <div className={styles.authButtons}>
                <Link
                  to="/register"
                  className={styles.authButton}
                  onClick={toggleMenu}
                >
                  REGISTRAR
                </Link>
                <span className={styles.separator}>/</span>
                <Link
                  to="/login"
                  state={{ from: location.pathname }}
                  className={styles.authButton}
                  onClick={toggleMenu}
                >
                  ENTRAR
                </Link>
              </div>
            )}
          </div>
          <div className={styles.line}></div>
          <div className={styles.searchContainer}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                placeholder="Buscar."
                className={styles.searchInput}
              />
              <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
            </div>
            <Button icon={filter} className={styles.buttonFilter} />
          </div>
          <div className={styles.mostSearched}>
            <span className={styles.titleSearch}>Lo más buscado</span>
            <div className={styles.buttonContainer}>
              <button className={styles.searchButton}>Golosina 1</button>
              <button className={styles.searchButton}>Golosina 1</button>
              <button className={styles.searchButton}>Golosina 1</button>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.searchButton}>Golosina 1</button>
              <button className={styles.searchButton}>Golosina 1</button>
              <button className={styles.searchButton}>Golosina 1</button>
            </div>
          </div>
        </div>
        {isAuthenticated && (
          <button className={styles.buttonOut} onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} size="xl" />
            SALIR
          </button>
        )}
      </div>
    </>
  );
};

export default MobileMenu;

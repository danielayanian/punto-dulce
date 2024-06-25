import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./MobileMenu.module.css";
import filter from "/img/Filter.svg";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSearch, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const MobileMenu = ({ isOpen, toggleMenu, isAuthenticated, userName }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("jwt"); 
    navigate("/");
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
                <span>{userName ?? ""}</span>
                <span>Mi cuenta</span>
              </div>
            ) : (
              <div className={styles.authButtons}>
                <Link to="/login" className={styles.authButton} onClick={toggleMenu}>
                  ENTRAR
                </Link>
                <span className={styles.separator}>/</span>
                <Link to="/register" state={{ from: location.pathname }} className={styles.authButton} onClick={toggleMenu}>
                  REGISTRAR
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
               <button className={styles.buttonOut} onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt  } size="xl"/>
                  SALIR
                </button>
      </div>
    </>
  );
};

export default MobileMenu;

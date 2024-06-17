import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./MobileMenu.module.css";
import filter from "/img/Filter.png";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSearch } from "@fortawesome/free-solid-svg-icons";

const MobileMenu = ({ isOpen, toggleMenu, isAuthenticated, userName }) => {
  const location = useLocation();
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
                {<span>{userName ?? ""}</span>}
                <span>Mi cuenta</span>
              </div>
            ) : (
              <div className={styles.authButtons}>
                <Link to="/register" state={{ from: location.pathname }} className={styles.authButton} onClick={toggleMenu}>
                REGISTRAR
                </Link>
                <span className={styles.separator}>/</span>
                <Link to="/login" state={{ from: location.pathname }} className={styles.authButton} onClick={toggleMenu}>
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
            <span>Lo más buscado</span>
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
      </div>
    </>
  );
};

export default MobileMenu;

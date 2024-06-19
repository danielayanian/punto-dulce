// src/components/MenuAdmi.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconAdmi from "../IconAdmi/IconAdmi";
import styles from "./MenuAdmi.module.css";
import logo from "../../../public/img/logo.png";

const MenuAdmi = ({ isOpen, toggleSidebar }) => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [openMenus, setOpenMenus] = useState({});

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
    setOpenMenus((prev) => {
      const newOpenMenus = {};
      if (!prev[iconName]) {
        newOpenMenus[iconName] = true;
      }
      return newOpenMenus;
    });
  };

  return (
    <>
      <div className={`${styles.menuContent} ${isOpen ? styles.open : ""}`}>
        <img src={logo} alt="logo de la pagina" className={styles.logo} />
        <div className={styles.icons}>
          <div className={styles.searchIcon}>
            <IconAdmi iconName="faSearch" extraClass={styles.searchIcon} />
          </div>
          <button className={styles.menuIcon} onClick={toggleSidebar}>
            <IconAdmi
              iconName={isOpen ? "faTimes" : "faBars"}
              extraClass={styles.menuIcon}
            />
          </button>
        </div>
      </div>

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.menu}>
          <li>
            <div className={styles.iconContent}>
              <IconAdmi
                iconName="faUser"
                isActive={activeIcon === "faUser"}
                onClick={() => handleIconClick("faUser")}
              />
              <Link to="" onClick={toggleSidebar}>
                Perfil
              </Link>
            </div>
            {openMenus["faUser"] && (
              <div>
                <ul className={`${styles.submenu} ${styles.submenuPerfil} ${openMenus["faUser"] ? styles.submenuOpen : ""}`}>
                  <li><Link to="./profile" onClick={toggleSidebar} className={styles.firstSubmenuItemLink}>Perfil</Link></li>
                  <li>Cerrar sesión</li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <div className={styles.iconContent}>
              <IconAdmi
                iconName="graphicIcon"
                isActive={activeIcon === "ventas"}
                onClick={() => handleIconClick("ventas")}
                customIcon={true}
              />
              <Link to="" onClick={toggleSidebar}>
                Ventas
              </Link>
            </div>
            {openMenus["ventas"] && (
              <div>
                <ul className={`${styles.submenu} ${openMenus["ventas"] ? styles.submenuOpen : ""}`}>
                  <li><Link to="" onClick={toggleSidebar} className={styles.firstSubmenuItemLink}>Resumenes de ventas</Link></li>
                  <li><Link to="" onClick={toggleSidebar}>Ventas por artículo</Link></li>
                  <li><Link to="" onClick={toggleSidebar}>Ventas por categoría</Link></li>
                  <li><Link to="" onClick={toggleSidebar}>Ventas por empleado</Link></li>
                  <li><Link to="" onClick={toggleSidebar}>Ventas por tipo de pago</Link></li>
                  <li><Link to="" onClick={toggleSidebar}>Recibo</Link></li>
                  <li><Link to="" onClick={toggleSidebar}>Ventas por modificador</Link></li>
                  <li><Link to="" onClick={toggleSidebar}>Descuentos</Link></li>
                  <li><Link to="" onClick={toggleSidebar}>Impuestos</Link></li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <div className={styles.iconContent}>
              <IconAdmi
                iconName="faCartShopping"
                isActive={activeIcon === "faCartShopping"}
                onClick={() => handleIconClick("faCartShopping")}
              />
              <Link to="" onClick={toggleSidebar}>
                Artículos
              </Link>
            </div>
            {openMenus["faCartShopping"] && (
              <div>
                <ul className={`${styles.submenu} ${styles.submenuPerfil} ${openMenus["faCartShopping"] ? styles.submenuOpen : ""}`}>
                  <li><Link to="" onClick={toggleSidebar} className={styles.firstSubmenuItemLink}>Lista de Artículos</Link></li>
                  <li><Link to="" onClick={toggleSidebar}>Categorías</Link></li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <div className={styles.iconContent}>
              <IconAdmi
                iconName="faUserFriends"
                isActive={activeIcon === "faUserFriends"}
                onClick={() => handleIconClick("faUserFriends")}
              />
              <Link to="" onClick={toggleSidebar}>
                Clientes
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuAdmi;

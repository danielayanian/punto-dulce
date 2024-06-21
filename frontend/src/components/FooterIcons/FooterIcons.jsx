// FooterIcons.jsx

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import graphicIcon from "/img/graphic.png";
import styles from "./FooterIcons.module.css";

const FooterIcons = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleIconClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.footerIcons}>
      <div
        className={`${styles.iconContainer} ${activeIndex === 0 ? styles.active : ""}`}
        onClick={() => handleIconClick(0)}
      >
        <FontAwesomeIcon icon={faUser} size="2x" className={styles.customIcon} />
        <span className={styles.iconTitle}>Perfil</span>
      </div>
      <div
        className={`${styles.iconContainer} ${activeIndex === 1 ? styles.active : ""}`}
        onClick={() => handleIconClick(1)}
      >
        <img
          src={graphicIcon}
          alt="graphic"
          className={styles.customIcon}
        />
        <span className={styles.iconTitle}>Ventas</span>
      </div>
      <div
        className={`${styles.iconContainer} ${activeIndex === 2 ? styles.active : ""}`}
        onClick={() => handleIconClick(2)}
      >
        <FontAwesomeIcon icon={faUserFriends} size="2x" className={styles.customIcon} />
        <span className={styles.iconTitle}>Clientes</span>
      </div>
      <div
        className={`${styles.iconContainer} ${activeIndex === 3 ? styles.active : ""}`}
        onClick={() => handleIconClick(3)}
      >
        <FontAwesomeIcon icon={faCartShopping} size="2x" className={styles.customIcon} />
        <span className={styles.iconTitle}>Artículos</span>
      </div>
    </div>
  );
};

export default FooterIcons;

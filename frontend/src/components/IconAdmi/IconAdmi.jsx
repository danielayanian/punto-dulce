// src/components/IconAdmi.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes, faUser, faCartShopping, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import graphicIcon from "../../../public/img/graphic.png";
import styles from "../MenuAdmi/MenuAdmi.module.css";

const icons = {
  faSearch,
  faBars,
  faTimes,
  faUser,
  faCartShopping,
  faUserFriends,
  graphicIcon,
};

const IconAdmi = ({ iconName, isActive, onClick, customIcon, extraClass }) => {
  const Icon = customIcon ? (
    <img src={icons[iconName]} alt={iconName} className={`${styles.iconImage} ${isActive ? styles.activeImage : ""}`} />
  ) : (
    <FontAwesomeIcon icon={icons[iconName]} size="xl" className={`${styles.iconFontAwesome} ${isActive ? styles.activeIcon : ""}`} />
  );

  return (
    <div
      className={`${extraClass ? extraClass : styles.iconMenu} ${isActive ? styles.activeIcon : ""}`}
      onClick={onClick}
    >
      {Icon}
    </div>
  );
};

export default IconAdmi;

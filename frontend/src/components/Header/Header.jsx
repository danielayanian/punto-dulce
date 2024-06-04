import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';
import MobileMenu from "../MobileMenu/MobileMenu"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className={styles.container}>
      
      <div className={styles.logo}>Logo</div>

      
      <nav className={styles.iconWraper}>
        <Link to="/cart" className={styles.icon} >
          <FontAwesomeIcon icon={faCartShopping} /> 
        </Link>

        {/* Menu mobile */}
         <div className={styles.icon} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
};

export default Header;
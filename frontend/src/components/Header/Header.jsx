import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';
import MobileMenu from "../MobileMenu/MobileMenu"; 
import logo from '/img/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className={styles.container}>
      
      <Link to="/" className={styles.logoLink}>
        <img src={logo} className={styles.logo} alt="Logo" />
      </Link>

      <nav className={styles.iconWraper}>
        <Link to="/cart" state={{ from: location.pathname }} className={styles.icon} >
          <FontAwesomeIcon icon={faCartShopping} /> 
        </Link>

        {/* Menu mobile */}
         <div className={styles.icon} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <MobileMenu 
          isOpen={isMenuOpen} 
          toggleMenu={toggleMenu} 
          isAuthenticated={isLoggedIn} 
        />
      </nav>
    </header>
  );
};

export default Header;
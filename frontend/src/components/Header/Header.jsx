import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';
import MobileMenu from '../MobileMenu/MobileMenu';
import logo from '/img/logo.png';
import LoginPopup from '../Cart/LoginPopup'; // Importa el componente LoginPopup
import PopupCart from '../Cart/PopupCart'; // Importa el componente PopupCart
import { getCart } from '../../helpers/fetchers'; // Ajusta la importación según sea necesario

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showPopupCart, setShowPopupCart] = useState(false);
  const navigate = useNavigate(); // Utiliza useNavigate para navegación

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = async () => {
    console.log('Cart icon clicked');
    if (isLoggedIn) {
      try {
        const cart = await getCart(); // Implementa la función getCart para obtener los datos del carrito
        console.log('Cart data fetched:', cart);
        setShowPopupCart(true);
      } catch (error) {
        console.error("Error fetching cart data", error);
      }
    } else {
      setShowLoginPopup(true);
    }
  };

  const handleLoginSuccess = () => {
    setShowLoginPopup(false);
    setShowPopupCart(true);
  };

  return (
    <header className={styles.headerContainer}>
      <Link to="/" className={styles.logoLink}>
        <img src={logo} className={styles.logo} alt="Logo" />
      </Link>

      <nav className={styles.iconWraper}>
        <div onClick={handleCartClick} className={styles.cartIcon}>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>

        <div className={styles.cartIcon}onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <MobileMenu 
          isOpen={isMenuOpen} 
          toggleMenu={toggleMenu} 
          isAuthenticated={isLoggedIn} 
        />
      </nav>

      {showLoginPopup && <LoginPopup onClose={() => setShowLoginPopup(false)} onSuccess={handleLoginSuccess} />}
      {showPopupCart && <PopupCart onClose={() => setShowPopupCart(false)} />}
    </header>
  );
};

export default Header;

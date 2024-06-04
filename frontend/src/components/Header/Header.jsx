import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';
import logo from '../../../public/img/logo.png'


const Header = () => {
  return (
    <header className={styles.container}>
      
      <img className={styles.logo} src={logo} alt='logo'/>

      <nav className={styles.iconWraper}>
        <Link to="/cart" className={styles.icon} >
          <FontAwesomeIcon icon={faCartShopping} /> 
        </Link>
        <Link to="/profile" className={styles.icon}>
          <FontAwesomeIcon icon={faBars} /> 
        </Link>
      </nav>
    </header>
  );
};

export default Header;
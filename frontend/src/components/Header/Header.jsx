import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      
      <div className={styles.logo}>Logo</div>

      
      <nav className={styles.iconWraper}>
        <Link to="/" className={styles.icon} >
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
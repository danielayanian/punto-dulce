

import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser, FaGlobe } from 'react-icons/fa';
import '../scss/layouts/NavBar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src="logo.png" alt="Punto Dulce" className="logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <ul className="navbar-icons">
          <li>
            <FaSearch />
          </li>
          <li>
            <FaShoppingCart />
          </li>
          <li>
            <FaUser />
          </li>
          <li>
            <FaGlobe />
          </li>
          <li>
            <span className="arrow-down">&#9660;</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

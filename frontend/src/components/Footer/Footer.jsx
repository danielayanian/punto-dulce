import styles from "./Footer.module.css";
import line from "/img/linea.svg";
import longLine from "/img/longLine.svg";
import logo from "/img/logo.png";
import arrowRight from "/img/chevron-right.svg";
import phone from "/img/tel.svg";
import homeIcon from "/img/home-icon.svg";
import logo2 from "/img/logo-2.svg";

const Footer = () => {
  return (
    <footer className={styles.container}>
      {/* <img src={logo} alt="Logo" className="footer-logo" /> */}
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.sectionContainer}>
        <div className={styles.section}>
          <h3>Atención al Cliente</h3>
          <img src={line}></img>
          <div className={styles.adds}>
            <img src={arrowRight} /> <p>Politicas De Envio</p>
          </div>
          <div className={styles.adds}>
            <img src={arrowRight} /> <p>Sugerencias</p>
          </div>
          <div className={styles.adds}>
            <img src={arrowRight} /> <p>Reclamos</p>
          </div>
        </div>
        <div className={styles.section}>
          <h3>Contacto</h3>
          <img src={line}></img>
          <div className={styles.adds}>
            <img src={homeIcon} /> <p>Mar Del Plata, Argentina</p>
          </div>
          <div className={styles.adds}>
            <img src={phone} /> <p>Teléfono Whatsapp (Link)</p>
          </div>
        </div>
      </div>
      <img src={longLine}></img>
      <p className={styles.copyRight}>Copyright@PuntoDulce - 2024</p>
      <img src={logo2}/>
    </footer>
  );
};

export default Footer;

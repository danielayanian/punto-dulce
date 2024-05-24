import styles from "./Footer.module.css";
import line from '../../../public/img/linea.svg'
import longLine from '../../../public/img/longLine.png'

const Footer = () => {
  return (
    <footer className={styles.container}>
      {/* <img src={logo} alt="Logo" className="footer-logo" /> */}
      <p>Logo</p>
      <div className={styles.sectionContainer}>
        <div className={styles.section}>
          <h3>Atención al Cliente</h3>
          <img src={line}></img>
          <p>Politicas De Envio</p>
          <p>Sugerencias</p>
          <p>Reclamos</p>
        </div>
        <div className={styles.section}>
          <h3>Contacto</h3>
          <img src={line}></img>
          <p>Mar Del Plata, Argentina</p>
          <p>Teléfono Whatsapp (Link)</p>
        </div>
      </div>
      <img src={longLine}></img>
      <p>Copyright@PuntoDulce - 2024</p>
    </footer>
  );
};

export default Footer;

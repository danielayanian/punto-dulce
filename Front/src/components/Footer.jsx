import React from 'react';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import '../scss/layouts/Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="left-section">
                <div className="logo">
                    <img src="logo.png" alt="Logo" />
                </div>
                <div className="design">
                    <img src="design.png" alt="Design" />
                </div>
            </div>
            <div className="right-section">
                <div className='columns'>
                    <div className="contact-info">
                        <div className="column">
                            <div className="contact-title">Atención al cliente</div>
                            <div className="line"></div>
                            <ul>
                                <li>Políticas de Envío</li>
                                <li>Sugerencias</li>
                                <li>Reclamos</li>
                            </ul>
                        </div>
                        <div className="column">
                            <div className="contact-title">Contacto</div>
                            <div className="line"></div>
                            <div className="location">
                                <FaMapMarkerAlt className="icon" />
                                <span>Mar de Plata, Argentina</span>
                            </div>
                            <div className="phone">
                                <FaPhone className="icon" />
                                <span>Teléfono: <a href="tel:telefono">Whatsapp (link)</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyrigth">
                    Copyrigth Punto dulce - 2024
                </div>
            </div>
        </footer>
    );
}

export default Footer;

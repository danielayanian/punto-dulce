import React from 'react';
import '../scss/layouts/Sales.scss'; // Importa el archivo CSS

const Sales = () => {
  return (
    <div className="sales-container">
        <h3 className='title'>OFERTAS DE LA SEMANA</h3>
      <div className="card">
        <div className="sale-badge">15% OFF</div>
        <img src="alfajores.jpg" alt="Alfajores" className="product-image" />
        <div className='details'>  <span className="product-info">
          Alfajores
        </span><div>$15</div></div>
      
      </div>
      <div className="card">
        <div className="sale-badge">15% OFF</div>
        <img src="choco.jpg" alt="Choco" className="product-image" />
        
        <div className='details'><span className="product-info">
          Chocolates
        </span>
        <div>$15</div></div>
      </div>
    </div>
  );
};

export default Sales;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import ProductCartList from "../components/Cart/ProductCartList"
import useGetCart from "../Hooks/useGetCart.jsx";

import ProductCart from '../components/Product/ProductCart';
// import useGetCart from '../Hooks/useGetCart.jsx'


const Cart = () => {
  const products = [
    { 
      id: 1, 
      name: 'Choco Delicia', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestias odio ex dicta, asperiores non quas exercitationem laudantium odit dolor sequi quis vitae? Minus iure, veniam quae beatae pariatur ipsa',
      imageUrl: '/img/alfajores.png', 
      price: 10, 
      quantity: 2 
    },
    { 
      id: 2, 
      name: 'Bon Bombón', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestias odio ex dicta, asperiores non quas exercitationem laudantium odit dolor sequi quis vitae? Minus iure, veniam quae beatae pariatur ipsam', 
      imageUrl: '/img/bombones.png', 
      price: 15, 
      quantity: 1 
    },
    { 
      id: 3, 
      name: 'Chocolate Negrito', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestias odio ex dicta, asperiores non quas exercitationem laudantium odit dolor sequi quis vitae? Minus iure, veniam quae beatae pariatur ipsam', 
      imageUrl: '/img/chocolate.png', 
      price: 12, 
      quantity: 3 
    },
    { 
      id: 4, 
      name: 'Bombon Chupito', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestias odio ex dicta, asperiores non quas exercitationem laudantium odit dolor sequi quis vitae? Minus iure, veniam quae beatae pariatur ipsam', 
      imageUrl: '/img/bombones.png', 
      price: 8, 
      quantity: 5 
    },
    { 
      id: 5, 
      name: 'Galle Choco', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestias odio ex dicta, asperiores non quas exercitationem laudantium odit dolor sequi quis vitae? Minus iure, veniam quae beatae pariatur ipsam', 
      imageUrl: '/img/galletas.png', 
      price: 6, 
      quantity: 4 
    },
  ];

  return <ProductCart products={products} />;
};

export default Cart;

{
  /* <div className={styles.detailRow}>
    <span className={styles.detailTitle}>Precio Total Minorista:</span>
    <span className={styles.detailValue}>${data.totalPriceMinor}</span>
  </div>; */
}
//   <div className={styles.buttonContainer}>
//   <Link to="/" className={`${styles.button} ${styles.buttonRight}`}>
//     Regresar
//     <img src={Left}/>
//   </Link>
//   <Link to="/paymentDetails" className={`${styles.button} ${styles.buttonLeft}`}>
//     Siguiente
//     <img src={Right}/>
//   </Link>
// </div>

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import ProductCartList from "../components/Cart/ProductCartList"
import useGetCart from "../Hooks/useGetCart.jsx";

export const Cart = ({ totalPriceMinor }) => {
  const { isLoading, error, data } = useGetCart();
  console.log(data);
  if (error) return <p>Ha habido un error ..</p>;
  if (!data) {
    return <p>Loading...</p>;
  }
  console.log("Data:", data);
console.log("Total Price Minor:", data.totalPriceMinor);
  return (
    <>
      <ProductCartList data={data} />;
    </>
  );
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

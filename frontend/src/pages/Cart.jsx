/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import ProductCartList from "../components/Cart/ProductCartList"
import useGetCart from "../Hooks/useGetCart.jsx";

import ProductCart from '../components/Product/ProductCart';



const Cart = () => {
  const { isLoading, error, data } = useGetCart();
console.log(data);
 
  return <ProductCart products={data}  />;
};

export default Cart;


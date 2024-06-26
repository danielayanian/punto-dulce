/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ProductCart from "../components/Product/ProductCart";
import useGetCart from "../Hooks/useGetCart";

const Cart = () => {
  const { isLoading, error, data } = useGetCart();

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Ha habido un error: {error.message}</p>;

  // Transforma los datos recibidos en el formato necesario para ProductCart
  const products = data.items.map((item) => ({
    id: item.product.id,
    name: item.product.name,
    description: item.product.description,
    imageUrl: item.product.image,
    price: item.product.priceMinor,
    quantity: item.quantity,
  }));

  return <ProductCart products={products} />;
};

export default Cart;

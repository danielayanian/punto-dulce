import Button from "../components/Button/Button";
import  ProductCard from "../components/ProductCard/ProductCard";
import { SearchBar } from "../components/SearchBar/SearchBar";
import chevronLeft from "/img/chevron-left.svg";
import styles from "../components/ProductCard/ProductCard.module.css";
import useGetProducts from "../Hooks/useGetProducts";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";


export const ProductList = () => {

  const { slug } = useParams();
  const { isLoading, error, data } = useGetProducts(slug ?? "");

  let navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  const handleSearchSubmit = () => {
    setIsSearching(true);
    // Aquí puedes agregar la lógica para filtrar los productos basados en searchTerm
    // Por ejemplo, podrías hacer una solicitud a la API o filtrar localmente la lista de productos
  };
  if (error) return <p>Ha habido un error ..</p>;
  return (
    <>
      <SearchBar
        onSearchTermChange={handleSearchTermChange}
        onSearchSubmit={handleSearchSubmit}
      />
      <Button
        text={"Regresar"}
        icon={chevronLeft}
        className={styles.chevronButton}
        onClick={goBack}
      />
      {data &&
        data
          .filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product) => <ProductCard key={product.id} product={product} />)}
    </>
  );
};

export default ProductList;

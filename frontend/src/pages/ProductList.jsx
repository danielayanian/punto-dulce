import Button from "../components/Button/Button";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { SearchBar } from "../components/SearchBar/SearchBar";
import chevronLeft from "../../public/img/chevron-left.svg";
import styles from "../components/ProductCard/ProductCard.module.css";
import useGetProducts from "../Hooks/useGetProducts";
import { useParams } from "react-router-dom";

export const ProductList = () => {
  const { slug } = useParams();
  console.log(slug);
  const { isLoading, error, data } = useGetProducts(slug ?? '')


  if(error) return <p>Ha habido un error ..</p> 
  return (
    <>
      <SearchBar />
      <Button
        text={"Regresar"}
        icon={chevronLeft}
        className={styles.chevronButton}
      />
      {data && data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductList;

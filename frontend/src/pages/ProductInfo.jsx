import Button from "../components/Button/Button";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { SearchBar } from "../components/SearchBar/SearchBar";
import chevronLeft from "../../public/img/chevron-left.png";
import styles from "../components/ProductCard/ProductCard.module.css";

export const ProductInfo = () => {
  const productObject = [
    {
      id: 1,
      name: "Chocolate Aguila",
      tag: "Sin stock",
      description:
        "Ut aute ea dolor elit ea cupidatat sunt id pariatur enim voluptate reprehenderit exercitation culpa.",
      priceMinor: "$99.99",
      priceMajor: "$150",
      image: "../../public/img/banner-img.png",
      banner: "PRODUCTO EN DESCUENTO",
      category: "Chocolates",
    },
   
  ];
  return (
    <>
      <SearchBar />
      <Button
        text={"Regresar"}
        icon={chevronLeft}
        className={styles.chevronButton}
      />
      {productObject.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductInfo;

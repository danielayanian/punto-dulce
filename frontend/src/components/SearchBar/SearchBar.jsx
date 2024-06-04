import filter from "../../../public/img/Filter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import bg from "../../../public/img/img-product.png";
import styles from "./SearchBar.module.css";
import Button from "../Button/Button";

export const SearchBar = () => {
    return (
        <>
      <div className={styles.container}>
        <img src={bg} alt="search-background" className={styles.bgImg} />
        <h3 className={styles.title}>QUE PRODUCTO DESEAS BUSCAR?</h3>
      </div>

      <div className={styles.barIconFilter}>
        <div className={styles.barIcon}>
          <input type="text" placeholder="Buscar..." className={styles.bar} />
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
        </div>

        <Button icon={filter} className={styles.filterButton} />
      </div>
    </>
  );
};

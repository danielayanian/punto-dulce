import filter from "../../../public/img/Filter.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import bg from "../../../public/img/img-product.png";
import styles from "./SearchBar.module.css";
import Button from "../Button/Button";
import { useState } from "react";

export const SearchBar = ({ onSearchTermChange, onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearchTermChange(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(); 
  };

  return (
    <>
      <div className={styles.container}>
        <img src={bg} alt="search-background" className={styles.bgImg} />
        <h3 className={styles.title}>QUE PRODUCTO DESEAS BUSCAR?</h3>
      </div>

      <form onSubmit={handleSubmit}>
      <div className={styles.barIconFilter}>
        <div className={styles.barIcon}>
          <input
            type="text"
            placeholder="Buscar..."
            className={styles.bar}
            value={searchTerm}
            onChange={handleChange}
          />
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
        </div>
        <Button type="submit" icon={filter} className={styles.filterButton} />
        </div>
      </form>
    </>
  );
};

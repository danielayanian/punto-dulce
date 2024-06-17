import Button from "../Button/Button";
import styles from "./FilterModal.module.css";
import arrowDown from "../../../public/img/arrowDown.svg";
import cross from "../../../public/img/close.svg";
import filter from "../../../public/img/Filter.svg";
import { useState } from "react";
import Acordeon from "../Acordeon/Acordeon";

const Modal = ({ isOpen, onClose, children }) => {
  const categories = [
    {
      id: 1,
      name: 'CATEGORIA',
      items: [
        { id: 1, name: 'Chocolate' },
        { id: 2, name: 'Gomitas' },
        { id: 2, name: 'Bebidas' },
        { id: 2, name: 'Varios' },
     
      ]
    },
    {
      id: 2,
      name: 'COLORES',
      items: [
        { id: 1, name: 'Rojo' },
        { id: 2, name: 'Azul' },
        { id: 3, name: 'Naranja' },
        { id: 4, name: 'Amarillo' },
        { id: 5, name: 'Verde' },
  
      ]
    },

  ];

  const [accordionStates, setAccordionStates] = useState({
    categoria: false,
    precio: false,
    descuentos: false,
    marcas: false,
    colores: false,
  });
  const toggleAccordion = (key) => {
    setAccordionStates((prevStates) => ({
     ...prevStates,
      [key]:!prevStates[key],
    }));
  };


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
const handleCheckboxChange = (id) => {
  setCheckedItems(prevState => ({
   ...prevState,
    [id]:!prevState[id],
  }));
};
  if (!isOpen) return null;

 

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        {children}
        <div className={styles.header}>
          <div className={styles.title}>
            <img src={filter} style={{ width: "1.2rem" }} />
            <h4>FILTRAR POR</h4>
          </div>
          <Button icon={cross} onClick={onClose} className={styles.cross} />
        </div>

        <div>
          <Acordeon categories={categories} />

        {/* <Button
          icon={arrowDown}
          text="CATEGORIA"
          className={`${styles.arrowButton} ${styles.icon}`}
          onClick={() => toggleAccordion("categoria")}
          isActive={accordionStates.categoria}
        /> */}
          {/* {accordionStates.categoria && (
            <div className={styles.acordionContent}>
              {items.map((item) => (
                <div key={item.id}>
                  <input
                    type="checkbox"
                    checked={checkedItems[item.id]}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                  <label>{item.name}</label>
                </div>
              ))}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Modal;

{
  /* <Button icon={arrowDown}  text="PRECIO" className={`${styles.arrowButton} ${styles.icon}`}/>
<Button icon={arrowDown}  text="DESCUENTOS" className={`${styles.arrowButton} ${styles.icon}`}/>
<Button icon={arrowDown}  text="MARCAS" className={`${styles.arrowButton} ${styles.icon}`}/>
<Button icon={arrowDown}  text="COLORES" className={`${styles.arrowButton} ${styles.icon}`}/> */
}

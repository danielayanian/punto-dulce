
import  { useState } from 'react';
import styles from "./Acordeon.module.css"
import Button from '../Button/Button';
import arrowDown from "../../../public/img/arrowDown.svg"

const Acordeon = ({ categories }) => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const handleClick = index => {
    const currentIndex = activeIndexes.indexOf(index);
    const newActiveIndexes = [...activeIndexes];

    if (currentIndex === -1) {
      newActiveIndexes.push(index);
    } else {
      newActiveIndexes.splice(currentIndex, 1);
    }

    setActiveIndexes(newActiveIndexes);
  };

  return (
    <div>
    {categories.map((category, index) => (
      <div key={category.id} className={styles.accordionItem}>
        <Button onClick={() => handleClick(index)} icon={arrowDown} className={styles.catName}>
          {category.name}
        </Button>
        {activeIndexes.includes(index) && (
          <div className={styles.accordionContent}>
            <ul>
              {category.items.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ))}
  </div>
  );
};

export default Acordeon;
import styles from './Categories.module.css'

const Categories = ({ categories  }) => {
 
const thisCategories = [
  { id: 1, categoryName: 'ALFAJORES', imageUrl: '../../../public/img/i-alfajor.svg' },
  { id: 2, categoryName: 'BOCADITOS Y BOMBONES', imageUrl: '../../../public/img/i-bombones.svg' },
  { id: 2, categoryName: 'CHOCOLATE', imageUrl: '../../../public/img/i-chocolates.svg' },
  { id: 2, categoryName: 'CHUPETINES Y CHICLES', imageUrl: '../../../public/img/i-chupetines.svg' },
  { id: 2, categoryName: 'GALLETITAS Y BARRITAS C.', imageUrl: '../../../public/img/i-galletas.svg' },
  { id: 2, categoryName: 'DULCE DE LECHE Y MIEL', imageUrl: '../../../public/img/i-dulceYmiel.svg' },
  { id: 2, categoryName: 'CARAMELOS Y GOMITAS', imageUrl: '../../../public/img/i-caramelos.svg' },
  { id: 2, categoryName: 'TURRONES Y MANTECOL', imageUrl: '../../../public/img/i-turrones.svg' },
  { id: 2, categoryName: 'BEBIDAS', imageUrl: '../../../public/img/i-bebidas.svg' },
  { id: 2, categoryName: 'DIET', imageUrl: '../../../public/img/i-diet.svg' },
  { id: 2, categoryName: 'VARIOS', imageUrl: '../../../public/img/i-varios.svg' },
];


  return (
    <div className={styles.container}>
      {thisCategories.map((category) => (
        <div key={category.id} className={styles.imgcontainer}>
          <img src={category.imageUrl} alt={category.categoryName} className={styles.image} />
          <h2 className={styles.text}>{category.categoryName}</h2>
        </div>
      ))}
    </div>
  );
};

export default Categories;
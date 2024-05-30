import styles from './Categories.module.css'

const Categories = ({ categories  }) => {
 
const thisCategories = [
  { id: 1, categoryName: 'Alfajores', imageUrl: '../../../public/img/i-alfajor.png' },
  { id: 2, categoryName: 'Bombones', imageUrl: '../../../public/img/i-bombones.png' },
  { id: 2, categoryName: 'Chocolate', imageUrl: '../../../public/img/i-chocolates.png' },
  { id: 2, categoryName: 'Chupetines', imageUrl: '../../../public/img/i-chupetines.png' },
  { id: 2, categoryName: 'Galletas', imageUrl: '../../../public/img/i-galletas.png' },
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
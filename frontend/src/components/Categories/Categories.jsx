import styles from './Categories.module.css'
import useGetCategories from '../../Hooks/useGetCategories.jsx'

const Categories = ({ categories  }) => {
  
  const { isLoading, error, data } = useGetCategories()

const thisCategories = [
  { id: 1, name: 'ALFAJORES', image: '../../../public/img/i-alfajor.svg' },
  { id: 2, name: 'BOCADITOS Y BOMBONES', image: '../../../public/img/i-bombones.svg' },
  { id: 3, name: 'CHOCOLATE', image: '../../../public/img/i-chocolates.svg' },
  { id: 4, name: 'CHUPETINES Y CHICLES', image: '../../../public/img/i-chupetines.svg' },
  { id: 5, name: 'GALLETITAS Y BARRITAS C.', image: '../../../public/img/i-galletas.svg' },
  { id: 6, name: 'DULCE DE LECHE Y MIEL', image: '../../../public/img/i-dulceYmiel.svg' },
  { id: 7, name: 'CARAMELOS Y GOMITAS', image: '../../../public/img/i-caramelos.svg' },
  { id: 8, name: 'TURRONES Y MANTECOL', image: '../../../public/img/i-turrones.svg' },
  { id: 9, name: 'BEBIDAS', image: '../../../public/img/i-bebidas.svg' },
  { id: 10, name: 'DIET', image: '../../../public/img/i-diet.svg' },
  { id: 11, name: 'VARIOS', image: '../../../public/img/i-varios.svg' },
];

// if(isLoading) return Spninner. agregar spinner
if(error) return <p>Ha habido un error ..</p> 
  return (
    <div className={styles.container}>
      {data?.map((category) => (
        <div key={category.id} className={styles.imgcontainer}>
          <img src={category.image} alt={category.name} className={styles.image} />
          <h2 className={styles.text}>{category.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Categories;
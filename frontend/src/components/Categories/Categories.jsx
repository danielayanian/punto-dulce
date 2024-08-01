import styles from './Categories.module.css'
import useGetCategories from '../../Hooks/useGetCategories.jsx'
import {Link} from 'react-router-dom'

const Categories = () => {
  
  const { isLoading, error, data } = useGetCategories()
  console.log('Error:', error)
  console.log('Data:', data)

  const categoryImg = {
    Alfajores: '/img/i-alfajor.svg',
    'Bocaditos y Bombones': '/img/i-bombones.svg',
    Chocolate: '/img/i-chocolates.svg',
    'Chupetines y Chicles': '/img/i-chupetines.svg',
    'Galletitas y Barritas': '/img/i-galletas.svg',
    'Dulce de Leche y Miel': '/img/i-dulceYmiel.svg',
    'Caramelos y Gomitas': '/img/i-caramelos.svg',
    'Turrones y Mantecol': '/img/i-turrones.svg',
    Bebidas: '/img/i-bebidas.svg',
    Diet: '/img/i-diet.svg',
    Varios: '/img/i-varios.svg',
  };

// if(isLoading) return Spninner. agregar spinner
if(error) return <p>Ha habido un error ..</p> 
  return (
    <div className={styles.container}>
      {data?.map((category) => (
        <div key={category.id} className={styles.imgcontainer}>
          <Link to={`product-list/${category.name}`} className={styles.link}>
          <img src={categoryImg[category.name]} alt={category.name} className={styles.image} />
          <h2 className={styles.text}>{category.name}</h2>
          </Link>
        </div>

      ))}
    </div>
  );
};

export default Categories;
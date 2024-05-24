import Carousel from "../components/Carousel/Carousel";
import Categories from "../components/Categories";
import Opinions from "../components/Opinions";



export const Home = () => {
  const allCategories = [
    { id: 1, categoryName: 'Alfajores', imageUrl: '../../../public/img/alfajores.png' },
    
  ];
  return (
    <>
      <Carousel  />

      <Categories categories={allCategories}/>

      <h2>OFERTAS DE LA SEMANA</h2>

      <Opinions/>
  
      <p>REGALA CON NUESTRA GIFT CARD</p>

      <div>IMAGEN GIFT CARD</div>

      <div>ALGUNA DE NUESTRAS MARCAS</div>
    </>
  );
};

export default Home;

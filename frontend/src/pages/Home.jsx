import Carousel from "../components/Carousel/Carousel";
import Categories from "../components/Categories";
import { GiftCard } from "../components/GiftCard/GiftCard";
// import Offers from "../components/Offers/Offers";
import Opinions from "../components/Opinions";
import OtherBrands from "../components/OtherBrands/OtherBrands";

export const Home = () => {
  const allCategories = [
    {
      id: 1,
      categoryName: "Alfajores",
      imageUrl: "../../../public/img/alfajores.png",
    },
  ];
  return (
    <>
      <Carousel />

      <Categories categories={allCategories} />

      {/* <Offers/> */}
      <h2>OFERTAS DE LA SEMANA</h2>

      <Opinions />

      <GiftCard />

      <OtherBrands/>
      
    </>
  );
};

export default Home;

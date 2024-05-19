
// Fichero src/components/App.jsx

import { Route, Routes } from "react-router-dom";
import ProductList from "./ProductList"
import Navbar from './NavBar';
import Carousel from './Carousel';
import CategoryIcons from './CategoryIcons';



const App = () => {
  

  return (
    <div>
      <Navbar />
      <Carousel/>
      <CategoryIcons />
      <Routes>
        <Route path ="/" element={<ProductList/>}/>
      </Routes>

      
    </div>
  );
};

export default App;






















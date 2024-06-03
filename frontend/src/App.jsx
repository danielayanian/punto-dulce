import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductInfo from "./pages/ProductInfo";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import Header from "./components/Header/Header";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./components/Register/Register";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<ProductInfo />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

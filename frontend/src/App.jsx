import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductInfo from "./pages/ProductInfo";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { Wsp } from "./components/WhatsApp/Wsp";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Wsp/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<ProductInfo />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductInfo from "./pages/ProductInfo";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./components/Register/Register";
import Cart from "./pages/Cart";
import PaymentForm from './pages/PaymentDetails';


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
          <Route path="/cart" element={<Cart/>} />
          <Route path="/paymentDetails" element={<PaymentForm  />} />
          <Route path="/paymentUser" element={<PaymentForm  />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

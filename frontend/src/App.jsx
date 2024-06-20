import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes  } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductList from "./pages/ProductList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Register from "./components/Register/Register";
import Cart from "./pages/Cart";
import { Wsp } from "./components/WhatsApp/Wsp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Policy from "./components/Policy/Policy";
import ScrollToTop from "./Hooks/ScrollToTop";
import PaymentForm from './pages/PaymentDetails';
import PurchaseCompleted from './pages/PurchaseCompleted';
import LoginInput from "./components/LoginInput/LoginInput";
import Admi from "./pages/Admi";

const App = () =>{
  
  const client = new QueryClient()

  return (
    
    <QueryClientProvider client={client} >
      <Router>
      <ScrollToTop />
        <Header />
        <Wsp/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-list/:slug" element={<ProductList />} />
          <Route path="/login" element={<LoginInput/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/paymentDetails" element={<PaymentForm  />} />
          <Route path="/admin/*" element={<Admi />} />
          <Route path="/purchase-completed" element={<PurchaseCompleted />} />
          <Route path="/policy" element={<Policy/>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
 
    
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductList from "./pages/ProductList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./components/Register/Register";
import Cart from "./pages/Cart";
import { Wsp } from "./components/WhatsApp/Wsp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () =>{
  const client = new QueryClient()

  return (
    
    <QueryClientProvider client={client} >
      <Router>
        <Header />
        <Wsp/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<ProductList />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Footer/>
      </Router>
    </QueryClientProvider>
    
  );
}

export default App;

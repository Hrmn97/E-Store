import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="app">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/product/:id" element={<Product />} />
            <Route exact path="/products/:id" element={<Products />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

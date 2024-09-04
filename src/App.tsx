import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AppSelector from './components/AppSelector';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Analytics from './pages/Analytics';
import About from './pages/About';
import Home from './Home';
import Portfolio from './pages/Portfolio';
import Products from './pages/Ecommerce/Products';
import OttPlatform from './pages/OttPlatform';
import SelectedProduct from './pages/Ecommerce/SelectedProduct';
import Cart from './pages/Ecommerce/Cart';
import EcommerceHome from './pages/Ecommerce/EcommerceHome';


function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path='/' element={<Home />}>
      <Route path="analytics" element={<Analytics />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="e-commerce" element={<EcommerceHome />} />
      <Route path="e-commerce/products" element={<Products />} />
      <Route path="product/:id" element={<SelectedProduct />} />
      <Route path="cart" element={<Cart />} />
      <Route path="ott-platform" element={<OttPlatform />} />
      <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;

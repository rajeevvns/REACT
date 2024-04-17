import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartComponent from './components/CartComponent';
import ProductForm from './components/ProductForm';
import Details from './components/Details';
import Default from './components/Default';
import NavbarComponent from './components/NavbarComponent';
function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartComponent />} />
        <Route path="/new_product" element={<ProductForm />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<ProductList />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;

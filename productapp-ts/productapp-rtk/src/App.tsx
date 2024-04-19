import React, { Suspense, lazy } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
// eager loading, add to main bundle.js
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import NavbarComponent from './components/NavbarComponent';

const CartComponent = lazy(() => import('./components/CartComponent'));
const ProductForm = lazy(() => import('./components/ProductForm'));

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={
          <Suspense fallback={<h1>Cart loading...</h1>}>
            <CartComponent />
          </Suspense>
        } />
        <Route path="/new_product" element={
          <Suspense fallback={<h1>Form loading...</h1>}>
            <ProductForm />
          </Suspense>
        } />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<ProductList />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;

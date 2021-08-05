import React from 'react';
import './App.css';
// import { BrowserRouter as Link } from 'react-router-dom';
import Header from './components/storefront/header/header'
import Details from './components/storefront/products/details'
import SimpleCart from './components/storefront/cart/simplecart'
import ProductsList from './components/storefront/products/productList';

function App() {
  return (
    <>

<SimpleCart /> 
<ProductsList />
<Header />
 <Details />
    </>
  );
}

export default App;

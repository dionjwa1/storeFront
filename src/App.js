import React from 'react';
import './App.css';
// import { BrowserRouter as Link } from 'react-router-dom';
import Header from './components/storefront/header/header'
import Details from './components/storefront/products/details'
import SimpleCart from './components/storefront/cart/simplecart'
import ProductsList from './components/storefront/products/productList';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router/>
      <Switch>
        <Route>
          <SimpleCart />
          <Link to='/'></Link>
        </Route>
        <Route>
          <ProductsList />
        </Route>
        <Route>
          <Header />
        </Route>
        <Route>
          <Details />
        </Route>
        </Switch>
    </>
      );
}

      export default App;

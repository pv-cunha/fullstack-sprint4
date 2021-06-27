import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';
import Filter from './components/filter/Filter';
import Products from './pages/Products';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <Filter />
      <Products />
      <Footer />
    </div>
  );
};

export default App;

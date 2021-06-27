import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';
import Filter from './components/filter/Filter';
import Products from './pages/Products';

const App = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <Filter />
      <Products />
    </div>
  );
};

export default App;

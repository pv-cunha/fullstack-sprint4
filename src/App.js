import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Products from './pages/Products';
import Footer from './components/footer/Footer';
import AppProvider from './context';

const App = () => {
  return (
    <AppProvider>
      <Header />
      <Products />
      <Footer />
    </AppProvider>
  );
};

export default App;

import React from 'react';

import { ProductsProvider } from './ProductsContext';
import { CategoriesProvider } from './CategoriesContext';
import { AlertProvider } from './AlertContext';

const AppProvider = ({ children }) => {
  return (
    <AlertProvider>
      <ProductsProvider>
        <CategoriesProvider>{children}</CategoriesProvider>
      </ProductsProvider>
    </AlertProvider>
  );
};

export default AppProvider;

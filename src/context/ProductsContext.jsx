import React from 'react';
import { useAlert } from './AlertContext';

const ProductsContext = React.createContext();

const useProducts = () => {
  const context = React.useContext(ProductsContext);

  if (!context) {
    throw new Error('useToast must be used within a ProductsProvider !');
  }

  return context;
};

const ProductsProvider = ({ children }) => {
  const { addAlert } = useAlert();

  const [products, setProducts] = React.useState([]);
  const [filters, setFilters] = React.useState([]);
  const [filtered, setFiltered] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    getProducts();

    getFilters();

    // eslint-disable-next-line
  }, []);

  const getProducts = React.useCallback(async () => {
    let response;
    let json;

    try {
      setLoading(true);

      response = await fetch('/products');

      if (!response.ok) {
        throw new Error('Erro ao carregar os dados dos produtos !');
      }

      json = await response.json();
    } catch (err) {
      json = null;
      addAlert({ text: err.message });
    } finally {
      setLoading(false);

      setProducts(json);
    }
  }, [addAlert]);

  const getFilters = React.useCallback(async () => {
    let response;
    let json;

    try {
      response = await fetch('/filters');

      if (!response.ok) {
        throw new Error('Erro ao carregar os dados dos filtros !');
      }

      json = await response.json();
    } catch (err) {
      json = null;
      addAlert({ text: err.message });
    } finally {
      setFilters(json);
    }
  }, [addAlert]);

  const filterProducts = (text) => {
    const filter = products.filter((product) => {
      const regex = new RegExp(`${text}`, 'gi');

      return product.name.match(regex) || product.price.match(regex);
    });

    setFiltered(filter);
  };

  const clearFilter = () => {
    setFiltered(null);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        filters,
        filtered,
        loading,
        filterProducts,
        clearFilter,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, useProducts };

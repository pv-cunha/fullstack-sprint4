import React from 'react';
import { useAlert } from './AlertContext';

const CategoriesContext = React.createContext();

const useCategories = () => {
  const context = React.useContext(CategoriesContext);

  if (!context) {
    throw new Error('useToast must be used within a CategoriesProvider !');
  }

  return context;
};

const CategoriesProvider = ({ children }) => {
  const { addAlert } = useAlert();

  const [categories, setCategories] = React.useState([]);
  const [current, setCurrent] = React.useState([]);

  React.useEffect(() => {
    getCategories();

    getCurrent();

    // eslint-disable-next-line
  }, []);

  const getCategories = React.useCallback(async () => {
    let response;
    let json;

    try {
      response = await fetch('/all');

      if (!response.ok) {
        throw new Error('Erro ao carregar os dados das categorias !');
      }

      json = await response.json();
    } catch (err) {
      json = null;
      addAlert({ text: err.message });
    } finally {
      setCategories(json);
    }
  }, [addAlert]);

  const getCurrent = React.useCallback(async () => {
    let response;
    let json;

    try {
      response = await fetch('/current');

      if (!response.ok) {
        throw new Error('Erro ao carregar os dados das breadcrumbs!');
      }

      json = await response.json();
    } catch (err) {
      json = null;
      addAlert({ text: err.message });
    } finally {
      setCurrent(json);
    }
  }, [addAlert]);

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        current,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesProvider, useCategories };

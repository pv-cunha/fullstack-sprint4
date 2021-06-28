import React from 'react';
import styles from './Products.module.css';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import Filter from '../components/filter/Filter';
import ProductItem from '../components/productItem/ProductItem';
import Loading from '../components/loading/Loading';
import { useProducts } from '../context/ProductsContext';
import { useCategories } from '../context/CategoriesContext';

const Products = () => {
  const { products, filtered, filters, loading } = useProducts();
  const { current } = useCategories();

  return (
    <section className="container animeLeft">
      {current && <Breadcrumbs breadcrumbs={current} />}
      {loading && <Loading />}

      {filters && <Filter filters={filters} />}

      <ul className={styles.productsList}>
        {filtered !== null
          ? filtered.map((product) => (
              <ProductItem key={product.sku} product={product} />
            ))
          : products.map((product) => (
              <ProductItem key={product.sku} product={product} />
            ))}
      </ul>
    </section>
  );
};

export default Products;

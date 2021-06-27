import React from 'react';
import styles from './Products.module.css';
import Filter from '../components/filter/Filter';
import ProductItem from '../components/productItem/ProductItem';
import Loading from '../components/loading/Loading';
import Alert from '../components/alert/Alert';
import useFetch from '../hooks/useFetch';

const Products = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    request('/products');
  }, [request]);

  return (
    <section className={`container`}>
      {data && <Filter filters={data} />}

      {loading && <Loading />}
      {error && <Alert />}

      <ul className={styles.productsList}>
        {data &&
          data
            .slice(0, data.length - 1)
            .map((product) => (
              <ProductItem
                key={product.sku}
                imageUrl={product.image}
                description={product.name}
                price={product.price}
                sku={product.sku}
              />
            ))}
      </ul>
    </section>
  );
};

export default Products;

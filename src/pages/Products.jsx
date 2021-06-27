import React from 'react';
import styles from './Products.module.css';
import ProductItem from '../components/productItem/ProductItem';

const Products = (props) => {
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    fetch('/products')
      .then((r) => r.json())
      .then((json) => {
        const data = json.slice(0, json.length - 1);

        setProducts(data);
      });
  }, []);

  console.log(products);

  return (
    <section className={`${styles.products} container`}>
      {products &&
        products.map((product) => (
          <ProductItem
            key={product.sku}
            imageUrl={product.image}
            description={product.name}
            price={product.price}
            sku={product.sku}
          />
        ))}
    </section>
  );
};

export default Products;

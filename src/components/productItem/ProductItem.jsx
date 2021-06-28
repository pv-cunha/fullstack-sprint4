import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductItem.module.css';

const ProductItem = ({ product }) => {
  const { name, image, price, sku } = product;
  return (
    <li className={styles.listItem} aria-labelledby={`${image}-${sku}`}>
      <div className={styles.card}>
        <figure>
          <img src={image} alt={name} className={styles.img} />
          <figcaption className={styles.description} id={`${image}-${sku}`}>
            {name}
          </figcaption>
          <span>
            <p className={styles.price}>R$ {price}</p>
          </span>
        </figure>
      </div>
    </li>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;

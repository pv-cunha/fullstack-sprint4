import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductItem.module.css';

const ProductItem = ({ imageUrl, description, price, sku }) => {
  return (
    <li className={styles.listItem} aria-labelledby={`${imageUrl}-${sku}`}>
      <div className={styles.card}>
        <figure>
          <img src={imageUrl} alt={description} className={styles.img} />
          <figcaption className={styles.description} id={`${imageUrl}-${sku}`}>
            {description}
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
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  sku: PropTypes.number.isRequired,
};

export default ProductItem;

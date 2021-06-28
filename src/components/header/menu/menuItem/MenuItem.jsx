import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuItem.module.css';

const MenuItem = ({ category }) => {
  const { label, link } = category;

  return (
    <li className={styles.menuItem}>
      <a href={link}>
        <span>{label}</span>
      </a>
    </li>
  );
};

MenuItem.propTypes = {
  category: PropTypes.object.isRequired,
};

export default MenuItem;

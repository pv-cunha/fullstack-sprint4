import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuItem.module.css';

const MenuItem = ({ label, link }) => {
  return (
    <li className={styles.menuItem}>
      <a href={link}>
        <span>{label}</span>
      </a>
    </li>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default MenuItem;

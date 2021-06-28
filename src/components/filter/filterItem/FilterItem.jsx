import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterItem.module.css';

const FilterItem = ({ label }) => {
  return (
    <li className={styles.listItem}>
      <button className={styles.listBtn}>
        <p className={styles.listName}>{label}</p>
        <img src="assets/filter.svg" alt="" className={styles.listSVG} />
      </button>
    </li>
  );
};

FilterItem.propTypes = {
  label: PropTypes.string,
};

export default FilterItem;

import React from 'react';
import styles from './Filter.module.css';
import FilterItem from './filterItem/FilterItem';

const Filter = ({ filters }) => {
  return (
    <section className={`${styles.filter} container`}>
      <ul className={styles.filterList}>
        {filters.map((filter) => (
          <FilterItem key={filter.id} label={filter.label} />
        ))}
      </ul>
    </section>
  );
};

export default Filter;

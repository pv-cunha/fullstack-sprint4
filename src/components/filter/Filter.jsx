import React from 'react';
import styles from './Filter.module.css';
import FilterItem from './filterItem/FilterItem';

const Filter = () => {
  const [test, setTest] = React.useState(null);

  React.useEffect(() => {
    fetch('/products')
      .then((r) => r.json())
      .then((json) => {
        const FilterItem = json.slice(json.length - 1, json.length);

        setTest(FilterItem[0].filters);
      });
  }, []);

  return (
    <section className={`${styles.filter} container`}>
      <ul className={styles.filterList}>
        {test &&
          test.map((filter) => (
            <FilterItem key={filter.id} label={filter.label} />
          ))}
      </ul>
    </section>
  );
};

export default Filter;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

const Searchbar = (props) => {
  return (
    <div className={styles.searchbar}>
      <img className={styles.searchbarSVG} src="assets/search.svg" alt="" />
      <label htmlFor="searchbar__input" className="escondeVisualmente">
        O que você está procurando ?
      </label>
      <input
        className={styles.searchbarInput}
        id="searchbar__input"
        type="search"
        placeholder="O que você está procurando?"
      />
    </div>
  );
};

Searchbar.propTypes = {};

export default Searchbar;

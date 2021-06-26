import React from 'react';
import styles from './Breadcrumbs.module.css';
import PropTypes from 'prop-types';

const Breadcrumbs = (props) => {
  return (
    <div className={styles.breadcrumbs}>
      <nav className={styles.breadcrumbsNav}>
        <ol className={styles.breadcrumbsList}>
          <li>
            <a href="#">Home</a>
          </li>
          <li className={styles.breadcrumbsSeparator}>/</li>
          <li>
            <a href="#">Infantil</a>
          </li>
          <li className={styles.breadcrumbsSeparator}>/</li>
          <li>
            <a href="#">Personagens</a>
          </li>
          <li className={styles.breadcrumbsSeparator}>/</li>
          <li>
            <strong>Mario Bros</strong>
          </li>
        </ol>
      </nav>
    </div>
  );
};

Breadcrumbs.propTypes = {};

export default Breadcrumbs;

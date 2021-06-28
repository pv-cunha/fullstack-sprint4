import React from 'react';
import styles from './BreadcrumbsItem.module.css';
import PropTypes from 'prop-types';

const BreadcrumbsItem = ({ breadcrumb, active }) => {
  const { link, name } = breadcrumb;

  return (
    <li>
      <a className={`${styles.link} ${active && styles.active}`} href={link}>
        {name}
      </a>
      <span className={`${styles.separator} ${active && styles.display}`}>
        /
      </span>
    </li>
  );
};

BreadcrumbsItem.propTypes = {
  breadcrumb: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
};

export default BreadcrumbsItem;

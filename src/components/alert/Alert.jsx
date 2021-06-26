import React from 'react';
import PropTypes from 'prop-types';
import styles from './Alert.module.css';

const Alert = ({ alert }) => {
  if (!alert) return null;
  return <p className={styles.alert}>{alert}</p>;
};

Alert.propTypes = {
  alert: PropTypes.string.isRequired,
};

export default Alert;

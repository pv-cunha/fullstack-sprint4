import React from 'react';
import PropTypes from 'prop-types';
import styles from './Alert.module.css';

const Alert = ({ alerts }) => {
  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <p key={alert.id} className={styles.alert}>
        {alert.text}
      </p>
    ))
  );
};

Alert.propTypes = {
  alert: PropTypes.array,
};

export default Alert;

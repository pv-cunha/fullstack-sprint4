import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.overlay}>
      <span className={styles.loading}></span>
    </div>
  );
};

export default Loading;

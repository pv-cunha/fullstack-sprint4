import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.contentMobile}>
        <button
          className={`${styles.mobileDrawer} ${styles.drawerOpen}`}
          type="menu"
        >
          <img src="assets/menu.svg" alt="Botão para abrir o menu navegação" />
          <p className={styles.logoTitle}>menu</p>
        </button>

        <button
          className={`${styles.mobileDrawer} ${styles.drawerClose}`}
          type="menu"
        >
          <img
            src="assets/close.svg"
            alt="Botão para fechar o menu navegação"
          />
          <p className={styles.logoTitle}>fechar</p>
        </button>
      </div>

      <div className={styles.mobile}>
        <img
          className={styles.mobileLogo}
          src="assets/rchlo.svg"
          alt="Home Riachuelo"
        />
      </div>

      <div className={styles.desktop}>
        <img
          className={styles.desktopLogo}
          src="assets/riachuelo.svg"
          alt="Home Riachuelo"
        />
      </div>

      <span></span>
    </div>
  );
};

export default Logo;

import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <section className={styles.footerContact}>
      <div className={styles.contact}>
        <p className={styles.contactInfo}>
          Receba ofertas e novidades por e-mail
        </p>
        <form className={styles.form}>
          <input
            className={styles.contactInput}
            type="email"
            placeholder="Digite aqui seu e-mail"
          />
          <button className={styles.contactBtn} type="submit">
            <span className={styles.contactBtnTxt}>Cadastrar</span>
          </button>
        </form>
        <p className={styles.contactMsg}>Baixe nosso App</p>
        <div className={styles.apps}>
          <a href="#url">
            <img
              className={styles.contactImg}
              src="assets/google-play.webp"
              alt="Google Play"
            />
          </a>
          <a href="#url">
            <img
              className={styles.contactImg}
              src="assets/app-store.webp"
              alt="App Store"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

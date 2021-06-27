import React from 'react';
import styles from './Footer.module.css';
import Contacts from './contacts/Contacts';
import Links from './links/Links';
import Payment from './payments/Payment';
import Credits from './credits/Credits';

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <Contacts />
      <Links />
      <Payment />
      <Credits />
    </footer>
  );
};

export default Footer;

import React from 'react';
import styles from './Payment.module.css';

const Payment = () => {
  return (
    <section className={styles.footerPayment}>
      <div className={styles.payment}>
        <div className={styles.paymentAlternatives}>
          <h3 className={styles.paymentTitle}>Formas de Pagamento</h3>
          <img
            className={styles.paymentImg}
            src="assets/ico-cartao-rchlo1.webp"
            alt="Cartão Riachuelo"
          />
          <img
            className={styles.paymentImg}
            src="assets/ico-cartao-rchlo2.webp"
            alt="Cartão Riachuelo MasterCard"
          />
          <img
            className={styles.paymentImg}
            src="assets/ico-cartao-rchlo3.webp"
            alt="Cartão Riachuelo Visa"
          />
          <img
            className={styles.paymentImg}
            src="assets/ico-cartao-visa.png"
            alt="Cartão Visa"
          />
          <img
            className={styles.paymentImg}
            src="assets/ico-cartao-master.webp"
            alt="Cartão MasterCard"
          />
          <img
            className={styles.paymentImg}
            src="assets/ico-cartao-amex.webp"
            alt="Cartão American Express"
          />
          <img
            className={styles.paymentImg}
            src="assets/ico-cartao-diners.png"
            alt="Cartão Dinners"
          />
          <img
            className={styles.paymentImg}
            src="assets/ico-cartao-elo.png"
            alt="Cartão Elo"
          />
          <img
            className={styles.paymentImg}
            src="assets/ico-boleto.webp"
            alt="Pagamento via boleto"
          />
          <img
            className={styles.paymentImg}
            src="assets/ico-paypal.png"
            alt="Pagamento via PayPal"
          />
        </div>
        <div className={styles.paymentSocial}>
          <h3 className={styles.paymentTitle}>Siga a Riachuelo</h3>
          <div className={styles.socialIcons}>
            <div className={styles.socialIcon}>
              <a href="#url" title="Ícone Facebook">
                <img
                  className={styles.iconImg}
                  src="assets/ico-facebook.svg"
                  alt=""
                />
              </a>
            </div>

            <div className={styles.socialIcon}>
              <a href="#url" title="Ícone Instagram RCHLO">
                <img
                  className={styles.iconImg}
                  src="assets/ico-instagram.svg"
                  alt=""
                />
              </a>
              <p className={styles.iconText}>RCHLO</p>
            </div>

            <div className={styles.socialIcon}>
              <a href="#url" title="Ícone Instagram Casa RCHLO">
                <img
                  className={styles.iconImg}
                  src="assets/ico-instagram.svg"
                  alt=""
                />
              </a>
              <p className={styles.iconText}>CASA RCHLO</p>
            </div>

            <div className={styles.socialIcon}>
              <a href="#url" title="Ícone Pinterest">
                <img
                  className={styles.iconImg}
                  src="assets/ico-pinterest.svg"
                  alt=""
                />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a href="#url" title="Ícone Twitter">
                <img
                  className={styles.iconImg}
                  src="assets/ico-twitter.svg"
                  alt=""
                />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a href="#url" title="Ícone Youtube">
                <img
                  className={styles.iconImg}
                  src="assets/ico-youtube.svg"
                  alt=""
                />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a href="#url" title="Ícone LinkedIn">
                <img
                  className={styles.iconImg}
                  src="assets/ico-linkedin.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.paymentAccessibility}>
          <h3 className={styles.paymentTitle}>Acessibilidade</h3>
          <img src="assets/ico-a11y.webp" alt="Ícone NVDA" />
        </div>
      </div>
    </section>
  );
};

export default Payment;

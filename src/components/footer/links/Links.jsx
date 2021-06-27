import React from 'react';
import styles from './Links.module.css';

const Links = () => {
  return (
    <section className={styles.footerLinks}>
      <div className={styles.links}>
        <div className={styles.linksContacts}>
          <div className={styles.col}>
            <a href="#url" className={styles.contactIcon}>
              <img
                className={styles.contactIconImg}
                src="assets/ico-attendance.svg"
                alt="Atendimento"
              />
              <p className={styles.contactIconTxt}>Atendimento</p>
            </a>
            <a href="#url" className={styles.contactIcon}>
              <img
                className={styles.contactIconImg}
                src="assets/ico-faq.svg"
                alt="Perguntas Frequentes"
              />
              <p className={styles.contactIconTxt}>Perguntas Frequentes</p>
            </a>
          </div>
          <div className={styles.col}>
            <a href="#url" className={styles.contactIcon}>
              <img
                className={styles.contactIconImg}
                src="assets/ico-invoice-and-statement.svg"
                alt="Fatura e Extrato"
              />
              <p className={styles.contactIconTxt}>Fatura e Extrato</p>
            </a>
            <a href="#url" className={styles.contactIcon}>
              <img
                className={styles.contactIconImg}
                src="assets/ico-work-with-us.svg"
                alt="Trabalhe Conosco"
              />
              <p className={styles.contactIconTxt}>Trabalhe Conosco</p>
            </a>
          </div>
        </div>
        <hr className={styles.linksSeparator} />
        <ul className={styles.linksList}>
          <li className={styles.companyLinks}>
            <h3 className={styles.companyLinksTitle}>Cartão Riachuelo</h3>
            <ul>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Midway Financeira
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Saiba como adquirir
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Veja sua fatura e extrato
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Buscando quitar suas dívidas?
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.companyLinks}>
            <h3 className={styles.companyLinksTitle}>Sobre a Riachuelo</h3>
            <ul>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  A Empresa
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Portal de Fornecedores
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Relação com Investidores
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Assessoria de Imprensa
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Trabalhe Conosco
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Programa Jovem Aprendiz
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Cadastro de Startups
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Mapa do Site
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Guide Shop
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Venda na Riachuelo Marketplace
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.companyLinks}>
            <h3 className={styles.companyLinksTitle}>Moda que Transforma</h3>
            <ul>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Na prática
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Entre Costuras
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Jeans Mais Transparente
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Ações Covid-19
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Free Free
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.companyLinks}>
            <h3 className={styles.companyLinksTitle}>Ajuda</h3>
            <ul>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Atendimento
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Perguntas Frequentes
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Trocas e Devoluções
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Portal da Privacidade
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Política de Privacidade
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Termos e Condições de Uso
                </a>
              </li>
              <li className={styles.companyLinksItem}>
                <a className={styles.companyLinksTxt} href="#url">
                  Regras e Resultados de Sorteios
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Links;

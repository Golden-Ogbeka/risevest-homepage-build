import React from 'react';
import BrandLogo from '../../../assets/brand/logo-alt.svg';
import { ReactComponent as ExternalIcon } from '../../../assets/icons/arrow-link.svg';
import styles from '../styles.module.css';
import {
  contactFooterLinks,
  exploreFooterLinks,
  mainFooterLinks,
  productsFooterLinks,
} from './footer-links';

const Footer = () => {
  const sections = [
    {
      title: <img src={BrandLogo} alt='Rise Vest Logo' />,
      links: mainFooterLinks,
    },
    {
      title: <h2>Explore</h2>,
      links: exploreFooterLinks,
    },
    {
      title: <h2>Products</h2>,
      links: productsFooterLinks,
    },
    {
      title: <h2>Contact Us</h2>,
      links: contactFooterLinks,
    },
  ];
  return (
    <footer className={styles.footerContainer + ' container'}>
      <nav className={styles.footerLinks}>
        {/* Section 1 */}
        {sections.map((item, index) => (
          <div className={styles.footerLinkSection} key={index}>
            {item.title}
            <ul>
              {item.links.map((item) => (
                <li key={item.label}>
                  <a href={item.destination}>
                    {item.label}
                    {item.external && <ExternalIcon />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;

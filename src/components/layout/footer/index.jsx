import React from 'react';
import { ReactComponent as ExternalIcon } from '../../../assets/icons/arrow-link.svg';
import styles from '../styles.module.css';
import { sections } from './data';

const Footer = () => {
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

import React, { useState } from 'react';
import LogoImage from '../../../assets/brand/logo.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow-down.svg';
import { ReactComponent as MenuIcon } from '../../../assets/icons/menu.svg';
import styles from '../styles.module.css';
import { navLinks } from './nav-links';
import NavMenu from './nav-menu';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className={styles.navbar + ' container'}>
      {/* Logo */}
      <img src={LogoImage} alt='Rise Vest Logo' />

      {/* Nav Links */}
      <ul className={styles.navList}>
        <li className={styles.navGroup}>
          <button
            id='navButton'
            className={styles.navButton}
            aria-expanded='false'
            aria-controls='nav-disclosure'
            onClick={() => setNavOpen(true)}
          >
            <MenuIcon width={24} height={24} />
          </button>

          {/* Mobile Menu */}
          <NavMenu open={navOpen} setOpen={setNavOpen} />

          <ul className={styles.navLinks}>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.destination}>
                  {item.label}
                  {item.type === 'dropdown' && <ArrowIcon />}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

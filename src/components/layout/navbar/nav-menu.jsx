import React from 'react';
import ClickAwayListener from 'react-click-away-listener';
import styles from '../styles.module.css';
import { navLinks } from './nav-links';

const NavMenu = ({ open, setOpen }) => {
  if (!open) return null;
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <ul id='nav-disclosure' className={styles.navMenu}>
        <ul className={styles.navMenuLinks}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.destination}>{item.label}</a>
            </li>
          ))}
        </ul>
      </ul>
    </ClickAwayListener>
  );
};

export default NavMenu;

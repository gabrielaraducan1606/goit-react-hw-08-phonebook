import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import UserMenu from '../UserMenu/UserMenu';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/register" className={styles.navLink}>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.navLink}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" className={styles.navLink}>
            Contacts
          </NavLink>
        </li>
      </ul>
      <UserMenu />
    </nav>
  );
}

Navigation.propTypes = {};

export default Navigation;

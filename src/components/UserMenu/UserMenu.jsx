import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authSlice';
import styles from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth.user?.email);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!userEmail) {
    return null;
  }

  return (
    <div className={styles.userMenu}>
      <p>{userEmail}</p>
      <button onClick={handleLogout} className={styles.button}>
        Logout
      </button>
    </div>
  );
}

UserMenu.propTypes = {};

export default UserMenu;

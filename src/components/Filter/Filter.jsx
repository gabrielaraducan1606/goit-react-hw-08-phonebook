import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contactSlice';
import styles from './Filter.module.css';

function Filter() {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <div className={styles.filterContainer}>
      <label className={styles.label}>Find contacts by name:</label>
      <input
        type="text"
        value={filter}
        onChange={(e) => dispatch(updateFilter(e.target.value))}
        placeholder="Search..."
        className={styles.input}
      />
    </div>
  );
}

Filter.propTypes = {
  // Dacă primește props externe, le definești aici
};

export default Filter;

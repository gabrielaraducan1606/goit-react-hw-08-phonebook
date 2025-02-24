import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

function ContactItem({ id, name, number, onDelete }) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.number}>{number}</p>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;

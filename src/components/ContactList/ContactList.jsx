import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items || []);
  const filter = useSelector((state) => state.contacts.filter || '');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      {filteredContacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <div className={styles.list}>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDelete={(id) => dispatch(deleteContact(id))}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ContactList;

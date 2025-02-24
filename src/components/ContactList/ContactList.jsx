import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import ContactItem from '../ContactItem/ContactItem';
import { Box, Typography, Stack } from '@mui/material';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items || []);
  const filter = useSelector((state) => state.contacts.filter || '');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box sx={{ mt: 2 }}>
      {filteredContacts.length === 0 ? (
        <Typography>No contacts found.</Typography>
      ) : (
        <Stack spacing={2}>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDelete={(id) => dispatch(deleteContact(id))}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
}

export default ContactList;


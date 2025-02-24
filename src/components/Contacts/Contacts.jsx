import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contactSlice';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { Box, Typography } from '@mui/material';

function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 2, bgcolor: 'white', border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Phonebook
      </Typography>
      <ContactForm />
      <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
        Contacts
      </Typography>
      <Filter />
      <ContactList />
    </Box>
  );
}

export default Contacts;

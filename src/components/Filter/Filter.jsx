import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contactSlice';
import { Box, FormControl, FormLabel, Input } from '@mui/material';

function Filter() {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <Box sx={{ mt: 2 }}>
      <FormControl fullWidth>
        <FormLabel>Find contacts by name:</FormLabel>
        <Input
          value={filter}
          onChange={(e) => dispatch(updateFilter(e.target.value))}
          placeholder="Search..."
        />
      </FormControl>
    </Box>
  );
}

export default Filter;

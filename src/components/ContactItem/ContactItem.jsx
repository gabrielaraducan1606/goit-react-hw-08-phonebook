import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button, Stack } from '@mui/material';

function ContactItem({ id, name, number, onDelete }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} sx={{ borderBottom: "1px solid #ccc", py: 1 }}>
      <Box>
        <Typography variant="subtitle1" fontWeight="bold">{name}</Typography>
        <Typography variant="body2">{number}</Typography>
      </Box>
      <Button variant="outlined" color="error" size="small" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Stack>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;

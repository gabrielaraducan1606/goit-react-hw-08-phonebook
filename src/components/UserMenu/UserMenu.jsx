import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authSlice';
import { Stack, Typography, Button } from '@mui/material';

function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth.user?.email);

  if (!userEmail) return null;

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white' }}>{userEmail}</Typography>
      <Button variant="outlined" color="error" size="small" onClick={() => dispatch(logout())} sx={{
            color: 'white',
          textTransform: 'none',
          borderRadius: '20px',
          fontWeight: 'bold',
          px: 3,
          py: 1,
          boxShadow: 3,
          '&:hover': {
            backgroundColor: 'error.dark'
          }
        }}>
        Logout
      </Button>
    </Stack>
  );
}

export default UserMenu;

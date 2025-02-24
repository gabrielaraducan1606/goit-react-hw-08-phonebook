import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import UserMenu from '../UserMenu/UserMenu';

function Navigation() {
  const linkStyles = {
    textTransform: 'none',
    fontSize: '1rem',
    color: 'inherit',
    textDecoration: 'none',
    marginRight: 2,
    '&.active': {
      fontWeight: 'bold',
      borderBottom: '2px solid white'
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Button component={NavLink} to="/register" sx={linkStyles}>
            Register
          </Button>
          <Button component={NavLink} to="/login" sx={linkStyles}>
            Login
          </Button>
          <Button component={NavLink} to="/contacts" sx={linkStyles}>
            Contacts
          </Button>
        </Box>
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;

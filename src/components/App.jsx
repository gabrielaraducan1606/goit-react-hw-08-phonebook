import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Navigation from './Navigation/Navigation';
import Register from './RegisterPage/RegisterPage';
import Login from './Login/LoginPage';
import Contacts from './Contacts/Contacts';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Navigation />
      <Box sx={{ mt: 10, display: 'flex', justifyContent: 'center' }}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={isAuthenticated ? <Contacts /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/register" />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;

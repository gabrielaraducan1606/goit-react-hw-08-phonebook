import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, FormControl, FormLabel, Input, Button, Alert } from '@mui/material';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/contacts');
    }
  }, [isAuthenticated, navigate]);

  // Funcție pentru validarea parolei
  const isValidPassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidPassword(password)) {
      setPasswordError('Parola trebuie să conțină minim 8 caractere, cel puțin o literă și o cifră.');
      return;
    }

    setPasswordError('');
    dispatch(signupUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 64px)',
        backgroundColor: '#f5f5f5',
        p: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" mb={3}>
          Înregistrare
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <FormLabel>Nume</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Introdu numele"
              required
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Introdu email"
              required
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <FormLabel>Parolă</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Introdu parola"
              required
            />
            {passwordError && <Typography color="error">{passwordError}</Typography>}
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{
              textTransform: 'none',
              borderRadius: '20px',
              fontWeight: 'bold',
              px: 3,
              py: 1,
              boxShadow: 2,
              mt: 2,
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Înregistrează-te
          </Button>

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {typeof error === 'object' ? error.message || JSON.stringify(error) : error}
            </Alert>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Register;

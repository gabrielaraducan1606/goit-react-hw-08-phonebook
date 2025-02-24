import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, FormControl, FormLabel, Input, Button } from '@mui/material';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/contacts');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
        backgroundColor: 'background.default',
        p: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          p: 6,
          border: '1px solid #ccc',
          borderRadius: 2,
          boxShadow: 2,
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h4" textAlign="center" mb={4}>
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
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
            Register
          </Button>
          {error && (
            <Typography color="error" mt={2}>
              {typeof error === 'object'
                ? error.message || JSON.stringify(error)
                : error}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Register;

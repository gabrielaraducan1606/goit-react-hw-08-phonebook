import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactSlice";
import { Box, TextField, Button, Typography } from "@mui/material";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2, border: "1px solid #ccc", borderRadius: 2, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Add a New Contact
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Number"
        variant="outlined"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit" fullWidth>
        Add Contact
      </Button>
    </Box>
  );
}

ContactForm.propTypes = {};

export default ContactForm;

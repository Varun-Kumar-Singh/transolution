import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Snackbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Payment = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <Box p={5}>
      <Typography variant="h4">Payment</Typography>
      <Box mt={3}>
        <Typography variant="body1">
          Please enter your payment details below to place your order.
        </Typography>
      </Box>
      <Box mt={3}>
        <TextField
          label="Card Number"
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </Box>
      <Box mt={3}>
        <TextField
          label="Expiration Date"
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </Box>
      <Box mt={3}>
        <TextField
          label="CVC"
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </Box>
      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
      <Snackbar
        open={open}
        onClose={handleClose}
        message="Order placed successfully!"
      />
    </Box>
  );
};

export default Payment;

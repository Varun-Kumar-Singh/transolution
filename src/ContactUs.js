import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const ContactUs = () => {
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
      <Typography variant="h4">Contact Us</Typography>
      <Box mt={3}>
        <Typography variant="body1">
          If you have any questions or feedback about our transport management
          solution, please fill out the form below. We'll get back to you as
          soon as possible.
        </Typography>
      </Box>
      <Box mt={3}>
        <TextField label="Name" fullWidth margin="normal" variant="outlined" />
      </Box>
      <Box mt={3}>
        <TextField label="Email" fullWidth margin="normal" variant="outlined" />
      </Box>
      <Box mt={3}>
        <TextField
          label="Message"
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
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
        message="Thanks for your feedback!"
      />
    </Box>
  );
};

export default ContactUs;

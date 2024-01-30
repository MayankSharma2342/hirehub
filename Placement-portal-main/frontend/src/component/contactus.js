import React from 'react';
import { Container, Typography, Grid, TextField, Button, Box } from '@mui/material';

const styles = {
  root: {
    padding: '24px',
    backgroundColor: '#f7f7f7',
    minHeight: 'calc(100vh - 64px - 48px - 32px)',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '32px',
  },
  input: {
    marginBottom: '16px',
  },
  message: {
    height: '200px',
    marginBottom: '8px',
  },
  map: {
    backgroundImage: `url("https://i.stack.imgur.com/UIE3c.png")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '400px',
  },
  submitButton: {
    marginTop: '12px',
  },
};

const ContactUs = () => {
  return (
    <>
   
    <div  style={styles.root} id='contact'>
      <Container maxWidth="lg ">
        <Typography   marginTop={5} variant="h3" align="center" style={styles.title}>
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <form>
              <TextField
                required
                fullWidth
                variant="outlined"
                label="Full Name"
                style={styles.input}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                type="email"
                label="Email Address"
                style={styles.input}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                label="Subject"
                style={styles.input}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                multiline
                rows={5}
                label="Message"
                style={styles.message}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={styles.submitButton}
              >
                Submit
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box style={styles.map}></Box>
          </Grid>
        </Grid>
      </Container>

      
    </div>

    </>
  );
};

export default ContactUs;
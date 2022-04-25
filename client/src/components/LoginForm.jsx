import React, { useState } from 'react'
import axios from 'axios';
import { Box, Button, Avatar, Typography, TextField, Grid, Link } from "@mui/material";
import { Google } from "@mui/icons-material";
import {css} from '@emotion/react';

const {REACT_APP_BACKEND_API} = process.env;

export default function LoginForm({ onSubmit, formRef }) {
  
  const formStyle = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    marginTop: '35%'
  })

  const buttonStyle = css({
    marginTop: '1rem',
    borderRadius: '20px'
  })

  const [email, setEmail] = useState('');

  const login = e => {
    e.preventDefault();
    onSubmit(email);
  }

  const oauth = () => {
    axios.get(`${REACT_APP_BACKEND_API}/oauth`)
      .then(res => {
        window.location = res.data;
      });
  }
  
  return (
    <Box sx={formStyle}>
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }} />
      <Box ref={formRef} component="form" onSubmit={login} fullWidth>
        <Typography component="h1" variant="h5" color={'primary.main'} align='center'>
          Sign In
        </Typography>
        <TextField
          variant='standard'
          margin="normal"
          required
          type="email"
          autoComplete='email'
          label="Email Address"
          sx={{width: '97%'}}
          onChange={e => setEmail(e.target.value)}
        />
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={buttonStyle}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<Google />}
              onClick={oauth}
              sx={buttonStyle}
            >
              Sign in with Google
            </Button>
            
              </Grid>
            </Grid>
          </Box>
        </Box>
  );
}
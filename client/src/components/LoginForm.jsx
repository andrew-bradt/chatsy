import React, { useState } from 'react'
import { Box, Button, Avatar, Typography, TextField, Grid, Link } from "@mui/material";
import axios from 'axios';

const {REACT_APP_BACKEND_API} = process.env;

export default function LoginForm({onSubmit}) {
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
    <Box
          sx={{
            marginBottom: 40,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={login} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              autoComplete='email'
              label="Email Address"
              onChange={e => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" onClick={oauth}>
                  Sign in with Google
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
  );
}
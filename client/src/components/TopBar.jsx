import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

export default function TopBar (props) {

  const { userId, setAnchor } = props;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='fixed'>
          <Toolbar variant='dense'>
            <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
              CHATSY
            </Typography>
            {userId && <Button color='inherit' onClick={e => setAnchor(e.currentTarget)}>Contacts</Button>}
            {userId && <Button color='inherit'>Logout</Button>}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
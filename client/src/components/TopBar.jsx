import React, {useState} from "react";
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

import ContactModal from "./ContactModal";

export default function TopBar(props) {
  
  const [modalAnchor, setAnchor] = useState(null);

  const { userId, contacts } = props;

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
      <ContactModal
        contacts={contacts}
        anchorEl={modalAnchor}
        setAnchor={setAnchor}
      />
    </>
  )
}
import React, {useState, useEffect} from "react";
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

import ContactModal from "./ContactModal";

export default function TopBar(props) {
  
  const [modalAnchor, setAnchor] = useState(null);
  const [contactSaved, addContact] = useState(['a@icloud.com', 'b@gmail.com', 'd@cool.com']);

  // for test styling purpose
  const { socket } = props;
  const userId = 1;

  useEffect(() => {
    if (socket) {
      socket.on('contact-info', ({ email }) => {
        addContact(prev => [...prev, email])
      })
    }
  }, [socket])

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
        contacts={contactSaved}
        anchorEl={modalAnchor}
        setAnchor={setAnchor}
      />
    </>
  )
}
import React, {useState, useEffect} from "react";
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

import ContactModal from "./ContactModal";

export default function TopBar(props) {
  
  const [modalAnchor, setAnchor] = useState(null);
  const [contactSaved, addContact] = useState([]);

  const { userId, socket } = props;

  useEffect(() => {
    if (socket.current) {
      socket.current.on('contact-info', ({ email }) => {
        addContact(prev => [...prev, email])
      })
    }
  }, [socket.current])

  const logOut = function () {
    socket.current.disconnect();
    window.location.reload(false)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='fixed'>
          <Toolbar variant='dense'>
            <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
              CHATSY
            </Typography>
            {userId && <Button color='inherit' onClick={e => setAnchor(e.currentTarget)}>Contacts</Button>}
            {userId && <Button color='inherit' onClick={logOut}>Logout</Button>}
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
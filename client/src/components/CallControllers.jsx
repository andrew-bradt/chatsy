import React from "react";
import { Button, Container, Box } from "@mui/material";

export default function CallControllers(props) {

  const { inLobby, socket, userId, toggleLobbyState } = props;

  
  const enterLobby = function () {
    toggleLobbyState(prev => !prev);
    socket.current.emit("enter-lobby", { userId });
  }

  return (
    <Container>
      <Box display="flex" justifyContent="space-between">

        {!inLobby && <Button variant="contained" onClick={enterLobby}>Enter Lobby</Button>}
        {inLobby && <Button variant="contained">Stop Matching</Button>}

        <Button variant="contained">End Call</Button>
        <Button variant="contained">Next</Button>
        <Button variant="contained">Send Info</Button>
      </Box>
    </Container>
  )
}
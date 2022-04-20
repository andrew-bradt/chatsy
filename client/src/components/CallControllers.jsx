import React from "react";
import { Button, Container, Box } from "@mui/material";

export default function CallControllers(props) {

  const { inLobby, socket, userId, toggleLobbyState, remoteSocketId, endCall } = props;

  const enterLobby = function () {
    toggleLobbyState(true);
    socket.current.emit("enter-lobby", { userId });
  }

  const leaveLobby = function () {
    toggleLobbyState(false);
    socket.current.emit("leave-lobby", {userId})
  }

  const end_call = function () {
    endCall();
    socket.current.emit("end-call", { remoteSocketId });
    socket.current.emit("enter-lobby", { userId });
  }

  const inCallButtons = function (remoteSocketId) {
    if (remoteSocketId) {
      return (
        <>
          <Button variant="contained" onClick={end_call}>End Call</Button>
          <Button variant="contained">Next</Button>
          <Button variant="contained">Send Info</Button>
        </>
      )
    }
  }

  return (
    <Container>
      <Box display="flex" justifyContent="space-around">

        {!inLobby && <Button variant="contained" onClick={enterLobby}>Start Matching</Button>}
        {inLobby && !remoteSocketId && <Button variant="contained" onClick={leaveLobby}>Stop Matching</Button>}

        {inCallButtons(remoteSocketId)}

      </Box>
    </Container>
  )
}
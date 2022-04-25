import React from "react";
import { Button, ButtonGroup, Container, Box, createTheme, ThemeProvider } from "@mui/material";

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

  const stopCall = function () {
    endCall();
    socket.current.emit("end-call", { remoteSocketId });
    toggleLobbyState(false)
  }

  const nextCall = function () {
    endCall();
    socket.current.emit("end-call", { remoteSocketId });
    socket.current.emit("enter-lobby", { userId }); 
  }

  const sendInfo = function () {
    socket.current.emit("send-contact-info", {
      remoteSocketId,
      userId
    });
  }

  const theme = createTheme({
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained',
        },
        styleOverrides: {
          root: {
            width: '47%'
          }
        }
      },
    },
  });

  const inCallButtons = function (remoteSocketId) {
    if (remoteSocketId) {
      return (
        <ButtonGroup fullWidth variant="contained">
          <Button onClick={stopCall}>End</Button>
          <Button onClick={nextCall}>Next</Button>
          <Button onClick={sendInfo}>Send Info</Button>
        </ButtonGroup>
      )
    }
  }

  return (
    <Container sx={{ marginTop: 'auto' }}>
      <ThemeProvider theme={theme}>
        <Box fullWidth display="flex" justifyContent="space-around">
          {!inLobby && userId && <Button onClick={enterLobby}>Start Matching</Button>}
          {inLobby && !remoteSocketId && <Button onClick={leaveLobby}>Stop Matching</Button>}
          {inCallButtons(remoteSocketId)}
        </Box>
      </ThemeProvider>
    </Container>
  )
}
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

import './App.css';
import {useState} from 'react';

import useConnections from './hooks/useConnections';

import { CssBaseline, Grid, Stack, Paper } from "@mui/material";
import TopBar from "./components/TopBar";
import LoginForm from './components/LoginForm';
import Chat from './components/Chat';
import InterestsList from './components/InterestsList';
import CallControllers from './components/CallControllers';

function App() {
  const [userId, setUserId] = useState(null);
  const [interests, setInterests] = useState([]);
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [inLobby, toggleLobbyState] = useState(false);
  const { videoRef, remoteVideoRef, endCall, handleLogin, socket } = useConnections(userId, setRemoteSocketId, setUserId, setInterests);

  return (
    <>
      <CssBaseline />
      <TopBar userId={userId} socket={socket.current} />

      <Grid
        container
        component="main"
        sx={{ height: "100vh", marginTop: "3rem" }}
      >
        <Grid
          item
          xs={3.5}
          sx={{
            backgroundColor: "rgb(246, 245, 241)",
            height: "100%"
          }}
          component={Paper}
          elevation={3}
          square
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100%" }}
          >
            {!userId && <LoginForm onSubmit={handleLogin} />}

            {/* <button
              onClick={() => {
                toggleLobbyState(prev => !prev);
                socket.current.emit("enter-lobby", { userId });
              }}
            >
              enter lobby
            </button>
            <button
              onClick={() => {
                socket.current.emit("send-contact-info", {
                  remoteSocketId,
                  userId
                });
              }}
            >
              send contact info
            </button>

            <button
              onClick={() => {
                endCall();
                socket.current.emit("end-call", { remoteSocketId });
              }}
            >
              End Call
            </button> */}

            {userId && (
              <InterestsList
                interests={interests}
                socket={socket}
                userId={userId}
                inLobby={inLobby}
              />
            )}
            {remoteSocketId && (
              <Chat socket={socket.current} remoteSocketId={remoteSocketId} />
            )}

            {userId && (
              <CallControllers
                inLobby={inLobby}
                socket={socket}
                userId={userId}
                toggleLobbyState={toggleLobbyState}
                remoteSocketId={remoteSocketId}
                endCall={endCall}
              />
            )}
          </Stack>
        </Grid>

        <Grid item xs={8.5}>
          <Stack justifyContent="center" alignItems="center">
            <video ref={videoRef} autoPlay></video>
            <video ref={remoteVideoRef} autoPlay></video>
          </Stack>
        </Grid>
      </Grid>

      {/* <button
        onClick = {() => {
          socket.current.emit('leave-lobby', {userId});
        }}
      >
        leave lobby
      </button>

      <button
        onClick = {() => {
          socket.current.emit('add-criteria', {userId, interest: 'cycling'});
        }}
      >
        add interest
      </button>

      <button
        onClick = {() => {
          socket.current.emit('remove-criteria', {userId, interest: interests[3]});
        }}
      >
        remove interest
      </button>

      <button
        onClick = {() => {
          socket.current.emit('send-msg', {remoteSocketId, msg: 'send a message'})
        }}
        >
          send a message
        </button>

      <button
        onClick={() => {
          endCall();
          socket.current.emit("end-call", {remoteSocketId});
        }}
      >
        End Call
      </button> */}
    </>
  );
}

export default App;

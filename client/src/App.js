/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

import './App.css';
import {useState} from 'react';

import useConnections from './hooks/useConnections';
import useMode from './hooks/useMode';

import { CssBaseline, Grid, Stack, Paper } from "@mui/material";
import TopBar from "./components/TopBar";
import LoginForm from './components/LoginForm';
import Chat from './components/Chat';
import InterestsList from './components/InterestsList';
import CallControllers from './components/CallControllers';
import Video from './components/Video';

function App() {
  const [userId, setUserId] = useState(null);
  const [interests, setInterests] = useState([]);
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [inLobby, toggleLobbyState] = useState(false);
  const { videoRef, remoteVideoRef, endCall, handleLogin, socket } = useConnections(userId, setRemoteSocketId, setUserId, setInterests);

  const {mode, SIGNED_OUT, OUTSIDE_LOBBY, IN_CALL, IN_LOBBY} = useMode({userId, remoteSocketId, inLobby});
  return (
    <>
      <CssBaseline />
      <TopBar userId={userId} socket={socket.current} />

      <Grid container component="main" sx={{ height: "100vh" }}>
        {/* LEFT COLUMN */}
        <Grid
          item
          xs={4}
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
            {mode === SIGNED_OUT && (
              <>
                <LoginForm onSubmit={handleLogin} />
              </>
            )}
            {mode === OUTSIDE_LOBBY && (
              <>
                <InterestsList
                  interests={interests}
                  socket={socket}
                  userId={userId}
                  inLobby={inLobby}
                />
              </>
            )}
            {mode === IN_CALL && (
              <>
                <Chat socket={socket.current} remoteSocketId={remoteSocketId} />
              </>
            )}
            {mode === IN_LOBBY && (
              <>
                <InterestsList
                  interests={interests}
                  socket={socket}
                  userId={userId}
                  inLobby={inLobby}
                />
              </>
            )}
            <CallControllers
              inLobby={inLobby}
              socket={socket}
              userId={userId}
              toggleLobbyState={toggleLobbyState}
              remoteSocketId={remoteSocketId}
              endCall={endCall}
            />
          </Stack>
        </Grid>
        {/* RIGHT COLUMN */}
        <Grid item xs={8} sx={{ height: "100%" }}>
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100%" }}
          >
            <Video videoRef={videoRef} remoteVideoRef={remoteVideoRef} remoteSocketId={remoteSocketId }/>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default App;

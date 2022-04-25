/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

import './App.css';
import {useState} from 'react';

import useConnections from './hooks/useConnections';
import useMode from './hooks/useMode';

import { CssBaseline, Grid, Stack, Paper } from "@mui/material";
import TopBar from "./components/TopBar";
import LoginForm from './components/LoginForm';
import WaitingIndicator from "./components/WaitingIndicator";
import Chat from './components/Chat';
import InterestsList from './components/InterestsList';
import SharedInterests from './components/SharedInterests';
import CallControllers from './components/CallControllers';
import Video from './components/Video';

const grid = css({
  height: 'calc(100vh - 48px)',
  marginTop: '48px',
  padding: '0 1.5rem 1.5rem 1.5rem'
});

const gridItem = css({
  height: "100%",
})

const columns = css({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: "center",
  padding: '20px',
  backgroundColor: "rgb(246, 245, 241)",
  borderRadius: '10px'
});

function App() {
  const [userId, setUserId] = useState(null);
  const [interests, setInterests] = useState([]);
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [sharedInterests, setSharedInterests] = useState([]);
  const [inLobby, toggleLobbyState] = useState(false);
  const { videoRef, remoteVideoRef, endCall, handleLogin, socket, loginFormElements, waitingElement } = useConnections({userId, setRemoteSocketId, setUserId, setSharedInterests, setInterests});

  const { mode, SIGNED_OUT, OUTSIDE_LOBBY, IN_CALL, IN_LOBBY } = useMode({ userId, remoteSocketId, inLobby });

  console.log('sharedInterests in App component: ', sharedInterests);
  return (
    <>
      <CssBaseline />
      <TopBar userId={userId} socket={socket} />

      <Grid container component="main" columnSpacing={3} css={grid}>
        {/* LEFT COLUMN */}
        <Grid item xs={5} sx={gridItem}>
          <Stack sx={columns}>
            {mode === SIGNED_OUT && (
              <>
                <LoginForm formRef={loginFormElements} onSubmit={handleLogin} />
                <WaitingIndicator elRef={waitingElement} />
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
                <SharedInterests sharedInterests={sharedInterests} />
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
        <Grid item xs={7} sx={gridItem}>
          <Stack css={columns}>
            <Video
              videoRef={videoRef}
              remoteVideoRef={remoteVideoRef}
              remoteSocketId={remoteSocketId}
            />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default App;

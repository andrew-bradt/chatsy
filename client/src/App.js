/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

import './App.css';
import {useState} from 'react';

import useConnections from './hooks/useConnections';

import LoginForm from './components/LoginForm';
import Chat from './components/Chat';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const styles = {
  wrapper: css`

  `,
  leftColumn: css`
    width: 36%;
    height: 80vh;
    background-color: lightblue;
  `,
  rightColumn: css`
    width: 64%;
    height: 80vh;
    background-color: lightgrey;
  `
};

function App() {
  const [userId, setUserId] = useState(null);
  const [interests, setInterests] = useState([]);
  const [remoteSocketId, setRemoteSocketId] = useState(null);

  const { videoRef, remoteVideoRef, endCall, handleLogin, socket } = useConnections(userId, setRemoteSocketId, setUserId, setInterests);

  return (
    <Container>
      <Box css={styles.leftColumn}>
        <Chat/>
      </Box>
      
      <Box css={styles.rightColumn}>
        <Chat/>
      </Box>
    </Container>
      
      /* <LoginForm onSubmit={handleLogin} />
      <button
        onClick = {() => {
          socket.current.emit('enter-lobby', {userId});
        }}
      >
        enter lobby
      </button>

      <button
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
        onClick = {() => {
          socket.current.emit('send-contact-info', {remoteSocketId, userId})
        }}
        >
          send contact info
        </button>
      
      <video width="500" height="500" ref={videoRef} autoPlay></video>
      <video width="500" height="500" ref={remoteVideoRef} autoPlay></video>
      <button
        onClick={() => {
          endCall();
          socket.current.emit("end-call", {remoteSocketId});
        }}
      >
        End Call
      </button> */
  );
}

export default App;

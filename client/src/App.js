import './App.css';
import {useState} from 'react';

import useConnections from './hooks/useConnections';

import { CssBaseline, Grid, Paper } from "@mui/material";
import TopBar from "./components/TopBar";
import LoginForm from './components/LoginForm';
import InterestsList from './components/InterestsList';
import ContactModal from './components/ContactModal';


function App() {
  const [userId, setUserId] = useState(null);
  const [interests, setInterests] = useState([]);
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  
  const [inLobby, toggleLobbyState] = useState(false);
  const [modalAnchor, setAnchor] = useState(null);
  const [contactSaved, addContact] = useState([]);

  const { videoRef, remoteVideoRef, endCall, handleLogin, socket } = useConnections(userId, setRemoteSocketId, setUserId, setInterests, addContact);

  return (
    <>
      <CssBaseline />
      <TopBar setAnchor={setAnchor} userId={userId} />
      <ContactModal
        contacts={contactSaved}
        anchorEl={modalAnchor}
        setAnchor={setAnchor}
      />

      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          md={3.5}
          sx={{
            backgroundColor: "#e7e9eb"
          }}
          component={Paper}
          elevation={3}
          square
        >
          <LoginForm onSubmit={handleLogin} />
          <button
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

          <InterestsList
            interests={interests}
            socket={socket}
            userId={userId}
            inLobby={inLobby}
          />
        </Grid>

        <Grid item md={8.5}>
          <video width="500" height="500" ref={videoRef} autoPlay></video>
          <video width="500" height="500" ref={remoteVideoRef} autoPlay></video>
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

import './App.css';
import {useState} from 'react';

import useConnections from './hooks/useConnections';

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
      <LoginForm onSubmit={handleLogin} />
      <button
        onClick={() => {
          toggleLobbyState(prev => !prev)
          socket.current.emit("enter-lobby", { userId });
        }}
      >
        enter lobby
      </button>
      <button
        onClick = {() => {
          socket.current.emit('send-contact-info', {remoteSocketId, userId})
        }}
        >
          send contact info
      </button>
      <button onClick={e => setAnchor(e.currentTarget)}>Contacts</button>
      <ContactModal contacts={contactSaved} anchorEl={modalAnchor} setAnchor={ setAnchor }/>
      <video width="500" height="500" ref={videoRef} autoPlay></video>
      <video width="500" height="500" ref={remoteVideoRef} autoPlay></video>
      <InterestsList interests={interests} socket={socket} userId={userId} inLobby={inLobby}/>
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

import './App.css';
import axios from 'axios';
import {useState, useRef} from 'react';

import useVideoCall from './hooks/useVideoCall';

import LoginForm from './components/LoginForm';


function App() {
  const [userId, setUserId] = useState(null);
  const [interests, setInterests] = useState([]);
  const [peerId, setPeerId] = useState(null);
  const [remoteSocketId, setRemoteSocketId] = useState(null);

  const socket = useRef(null);
  
  const { videoRef, remoteVideoRef, endCall } = useVideoCall(socket, userId, peerId, setRemoteSocketId);

  const handleLogin = (email) => {
    axios.post("/login", { email }).then(res => {
      const { userId, interestsArray, peerId } = res.data;
      setUserId(userId);
      setInterests(interestsArray);
      setPeerId(peerId);
    });
  };

  return (
    <>
      <LoginForm onSubmit={handleLogin} />
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
      
      <video width="500" height="500" ref={videoRef} autoPlay></video>
      <video width="500" height="500" ref={remoteVideoRef} autoPlay></video>
      <button
        onClick={() => {
          endCall();
          socket.current.emit("end-call", {remoteSocketId});
        }}
      >
        End Call
      </button>
    </>
  );
}

export default App;

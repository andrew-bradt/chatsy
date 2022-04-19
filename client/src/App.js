import './App.css';
import axios from 'axios';
import Peer from 'peerjs';
import {useState, useRef} from 'react';

import useVideoCall from './hooks/useVideoCall';

import LoginForm from './components/LoginForm';



function App() {
  const [userId, setUserId] = useState(null);
  const [interests, setInterests] = useState([]);
  const [remoteSocketId, setRemoteSocketId] = useState(null);

  const socket = useRef(null);
  const peer = useRef(null);
  
  const { videoRef, remoteVideoRef, endCall } = useVideoCall(socket, peer, userId, setRemoteSocketId);

  const handleLogin = (email) => {
    axios.post("/login", { email }).then(res => {
      const { userId, interestsArray, peerId } = res.data;
      setUserId(userId);
      setInterests(interestsArray);
      peer.current = new Peer(peerId);
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

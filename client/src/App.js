import './App.css';
import axios from 'axios';
import {useState, useEffect, useRef} from 'react';
import socketIOClient from "socket.io-client"

import LoginForm from './components/LoginForm';


// import usePeer from './hooks/usePeer';

function App() {
  // const { videoRef, remoteVideoRef, endCall } = usePeer(socket);
  const [userId, setUserId] = useState(null);
  const [interests, setInterests] = useState([]);
  const socket = useRef(null);

  useEffect(() => {
    if (userId) {
      socket.current = socketIOClient('/');
    }
  }, [userId]);

  const handleLogin = (email, peerId) => {
    axios.post('/login', {email, peerId})
      .then(res => {
        const {userId, interestsArray} = res.data;
        setUserId(userId);
        setInterests(interestsArray);
      });

    console.log('userId: ', userId);
  };

  return (
    <>
      <LoginForm onClick = {handleLogin}/>
      <button
        onClick = {() => {
          socket.current.emit('enter-lobby', {userId});
        }}
      >
        send socket msg
      </button>
    </>
    
    // <div className="App">
    //   <video width="500" height="500" ref={videoRef} autoPlay ></video>
    //   <video width="500" height="500" ref={remoteVideoRef} autoPlay ></video>
    //   <button onClick={() => {
    //     endCall();
    //     socket.emit('endCall');
    //   }}>End Call</button>
    // </div>
    // <LoginForm/>
  );
}

export default App;

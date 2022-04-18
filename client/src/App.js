import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import socketIOClient from "socket.io-client"

import LoginForm from './components/LoginForm';


// import usePeer from './hooks/usePeer';

// const socket = socketIOClient('/');

function App() {
  // const { videoRef, remoteVideoRef, endCall } = usePeer(socket);
  const [userId, setUserId] = useState(null);
  const [interests, setInterests] = useState([]);
  const [socket, setSocket] = useState(null);
  
  useEffect(() => {
    userId && setSocket(socketIOClient('/'));
  }, [userId]);

  return (
    // <div className="App">
    //   <video width="500" height="500" ref={videoRef} autoPlay ></video>
    //   <video width="500" height="500" ref={remoteVideoRef} autoPlay ></video>
    //   <button onClick={() => {
    //     endCall();
    //     socket.emit('endCall');
    //   }}>End Call</button>
    // </div>
    // <LoginForm/>
    <></>
  );
}

export default App;

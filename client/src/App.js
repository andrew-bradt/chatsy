import './App.css';
import socketIOClient from "socket.io-client"

import usePeer from './hooks/usePeer';

const socket = socketIOClient('/');

function App() {

  const { videoRef, remoteVideoRef, endCall } = usePeer(socket);

  return (
    <div className="App">
      <video width="500" height="500" ref={videoRef} autoPlay ></video>
      <video width="500" height="500" ref={remoteVideoRef} autoPlay ></video>
      <button onClick={() => {
        endCall();
        socket.emit('endCall');
      }}>End Call</button>
    </div>
  );
}

export default App;

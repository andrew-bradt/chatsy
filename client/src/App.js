import './App.css';
import { useEffect, useRef } from "react";
import Peer from "peerjs"
import socketIOClient from "socket.io-client"

const socket = socketIOClient('/');

function App() {

  const videoRef = useRef();
  const remoteVideoRef = useRef();
  const currentCall = useRef();

  
  useEffect(() => {
    const constraints = {
      'video': true,
      'audio': false
    }
  navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        videoRef.current.srcObject = stream;
      })
      .catch(error => {
          console.error('Error accessing media devices.', error);
      });
  }, [])

  useEffect(() => {
    const peer = new Peer();
    peer.on('open', function (id) {
      console.log('My peer ID is ' + id)

      // send to server
      socket.emit('peerId', {peerId: id})
    })

    peer.on('call', (call) => {
      currentCall.current = call
      call.answer(videoRef.current.srcObject);
      call.on('stream', (remoteVidoStream) => {
        remoteVideoRef.current.srcObject = remoteVidoStream;
      })
    })

    socket.on('new_user', msg => {
      const peerId = msg.onlineUser.pop();
      const call = peer.call(peerId, videoRef.current.srcObject)

      currentCall.current = call
      call.on('stream', (remoteVidoStream) => {
        remoteVideoRef.current.srcObject = remoteVidoStream;
      })
    })

    socket.on('endCall', () => {
      remoteVideoRef.current.srcObject = null
    })

  }, [])

  return (
    <div className="App">
      <video width="500" height="500" ref={videoRef} autoPlay ></video>
      <video width="500" height="500" ref={remoteVideoRef} autoPlay ></video>
      <button onClick={() => {
        currentCall.current.close();
        remoteVideoRef.current.srcObject = null;
        socket.emit('endCall');
      }}>End Call</button>
    </div>
  );
}

export default App;

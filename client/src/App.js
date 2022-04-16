import './App.css';
import { useEffect, useRef } from "react";
import Peer from "peerjs"
import socketIOClient from "socket.io-client"

const socket = socketIOClient('/');

function App() {

  const videoRef = useRef();
  const remoteVideoRef = useRef();

  
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
      call.answer(videoRef.current.srcObject);
      call.on('stream', (remoteVidoStream) => {
        remoteVideoRef.current.srcObject = remoteVidoStream;
      })
    })

    socket.on('new_user', msg => {
      const peerId = msg.onlineUser.pop();
      console.log(videoRef.current.srcObject)
      const call = peer.call(peerId, videoRef.current.srcObject)
      call.on('stream', (remoteVidoStream) => {
        remoteVideoRef.current.srcObject = remoteVidoStream;
        console.log("incoming", remoteVidoStream)
      })
    })

    return () => {
      peer.destroy()
    }
  }, [])

  return (
    <div className="App">
      <video width="500" height="500" ref={videoRef} autoPlay ></video>
      <video width="500" height="500" ref={remoteVideoRef} autoPlay ></video>
      <button>End Call</button>
    </div>
  );
}

export default App;

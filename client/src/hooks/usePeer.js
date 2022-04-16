import { useEffect, useRef } from "react";
import Peer from "peerjs";


export default function usePeer(socket) {
  
  const videoRef = useRef();
  const remoteVideoRef = useRef();
  const currentCall = useRef();
  
  const endCall = () => {
    currentCall.current.close();
    remoteVideoRef.current.srcObject = null;
  };
  
  // get local user video stream on page
  useEffect(() => {
    const constraints = {
      video: true,
      audio: false
    };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => {
        videoRef.current.srcObject = stream;
      })
      .catch(error => {
        console.error("Error accessing media devices.", error);
      });
  }, [])
  
  // Peer related logic
  useEffect(() => {
    const peer = new Peer();
    peer.on("open", function (id) {
      console.log("My peer ID is " + id);
  
      // send current user peer id to server
      socket.emit("peerId", { peerId: id });
    });
  
    // listen for call event, and answer
    peer.on("call", call => {
      currentCall.current = call;
      call.answer(videoRef.current.srcObject);
      call.on("stream", remoteVidoStream => {
        remoteVideoRef.current.srcObject = remoteVidoStream;
      });
    });
  
    // receive other user's peer id and call immediately
    socket.on("new_user", msg => {
      const peerId = msg.onlineUser.pop();
      const call = peer.call(peerId, videoRef.current.srcObject);
  
      currentCall.current = call;
      call.on("stream", remoteVidoStream => {
        remoteVideoRef.current.srcObject = remoteVidoStream;
      });
    });
  
    // end the peer call after getting endCall event from server
    socket.on("endCall", endCall);
  }, []);
  
  return { videoRef, remoteVideoRef, endCall }
}

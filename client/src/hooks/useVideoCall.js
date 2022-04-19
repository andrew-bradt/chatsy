import { useEffect, useRef } from "react";
import socketIOClient from "socket.io-client"
import Peer from "peerjs"

export default function useVideoCall(socket,  userId, peerId) {
  
  const videoRef = useRef();
  const remoteVideoRef = useRef();

  const currentCall = useRef();
  const peer = useRef(null);

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
  
  // Connection related logic
  useEffect(() => {
    if (userId) {
      socket.current = socketIOClient("/");
      peer.current = new Peer(peerId);
      socket.current.on('connect', ()=>{
        socket.current.emit('add-socket-id', ({userId}));
      });

      // listen for call event, and answer
      peer.current.on("call", call => {

        console.log(call.metadata);

        currentCall.current = call;
        call.answer(videoRef.current.srcObject);
        call.on("stream", remoteVidoStream => {
          remoteVideoRef.current.srcObject = remoteVidoStream;
        });
      });
    
      // receive other user's peer id and call immediately
      socket.current.on("callThisPeer", msg => {
        const { peerId, sharedInterests } = msg;
        const data = {metadata: {"sharedInterests":sharedInterests[0]}}

        // start calling the other peer and send shared interests to that peer
        const call = peer.current.call(peerId, videoRef.current.srcObject, data);
        currentCall.current = call;
        call.on("stream", remoteVidoStream => {
          remoteVideoRef.current.srcObject = remoteVidoStream;
        });
      });
    
      // end the peer call after getting endCall event from server
      socket.current.on("endCall", endCall);
    }
  }, [userId, peerId, socket]);

  
  return { videoRef, remoteVideoRef, endCall }
}

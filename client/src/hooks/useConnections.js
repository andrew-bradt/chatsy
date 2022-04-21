import { useEffect, useRef } from "react";
import socketIOClient from "socket.io-client"
import Peer from "peerjs"
import axios from "axios";

export default function useConnections(userId, setRemoteSocketId, setUserId, setInterests, setSharedInterests, addContact) {
  
  const videoRef = useRef();
  const remoteVideoRef = useRef();

  const socket = useRef(null);
  const peer = useRef(null);
  const currentCall = useRef();

  const endCall = () => {
    currentCall.current.close();
    remoteVideoRef.current.srcObject = null;
    setRemoteSocketId(null);
  };

  const handleLogin = (email) => {
    axios.post("/login", { email }).then(res => {
      const { userId, interestsArray, peerId } = res.data;
      setUserId(userId);
      setInterests(interestsArray);
      peer.current = new Peer(peerId);
    });
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
      socket.current.on('connect', ()=>{
        socket.current.emit('add-socket-id', ({userId}));
      });

      socket.current.on('contact-info', ({email}) => console.log(email));

      // listen for call event, and answer
      peer.current.on("call", call => {

        console.log(call.metadata);

        setRemoteSocketId(call.metadata.remoteSocketId);
        setSharedInterests(call.metadata.sharedInterests);

        currentCall.current = call;
        call.answer(videoRef.current.srcObject);
        call.on("stream", remoteVidoStream => {
          remoteVideoRef.current.srcObject = remoteVidoStream;
        });
      });
    
      // receive other user's peer id and call immediately
      socket.current.on("callThisPeer", msg => {
        const { peerId, remoteSocketId, sharedInterests } = msg;

        const socketId = socket.current.id
        setRemoteSocketId(remoteSocketId);        
        setSharedInterests(sharedInterests);
        const data = {metadata: {"sharedInterests":sharedInterests[0],"remoteSocketId":socketId}}

        // start calling the other peer and send shared interests to that peer
        const call = peer.current.call(peerId, videoRef.current.srcObject, data);
        currentCall.current = call;
        call.on("stream", remoteVidoStream => {
          remoteVideoRef.current.srcObject = remoteVidoStream;
        });
      });
    
      // end the peer call after getting endCall event from server
      socket.current.on("endCall", () => {
        console.log('the other user ended the call')
        endCall();
      });

      // Other socket event listeners
      // register receiving contact info event

    }
  }, [userId, peer, socket, setRemoteSocketId, addContact]);

  
  return { videoRef, remoteVideoRef, endCall, handleLogin, socket }
}

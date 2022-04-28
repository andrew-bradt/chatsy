import { useEffect, useRef } from "react";
import socketIOClient from "socket.io-client"
import Peer from "peerjs"
import axios from "axios";
const {REACT_APP_BACKEND_API} = process.env;

export default function useConnections({ userId, setRemoteSocketId, setUserId, setInterests, setSharedInterests, addContact }) {
  const loginFormElements = useRef();
  const waitingElement = useRef();

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

  const handleLogin = email => {
    axios.post(`${REACT_APP_BACKEND_API}/login`, { email }).then(res => {
      const { userId, interestsArray, peerId } = res.data;
      setUserId(userId);
      setInterests(interestsArray);
      peer.current = new Peer(peerId);
    });
  };
  
  // check oauth code from URL and do api calls
  useEffect(() => {
    const url = window.location.search;
    const oauthCode = url.slice(6);
    if (oauthCode) {
      window.history.replaceState(null, 'Welcome', '/loading-interests')
      // toggle loginForm and waitingIndicator
      loginFormElements.current.setAttribute('hidden', true);
      waitingElement.current.style.visibility = 'visible';

      axios.post(`${REACT_APP_BACKEND_API}/login`, { oauthCode }).then(res => {
        const { userId, interestsArray, peerId } = res.data;
        setUserId(userId);
        setInterests(interestsArray);
        peer.current = new Peer(peerId);
        window.history.replaceState(null, 'Welcome', '/loggedin')
      });
    }
  }, [setInterests, setUserId]);

  // get local user video stream on page
  useEffect(() => {
    const constraints = {
      video: true,
      audio: true
    };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => {
        videoRef.current.srcObject = stream;
      })
      .catch(error => {
        console.error("Error accessing media devices.", error);
      });
  }, []);

  // Connection related logic
  useEffect(() => {
    if (userId) {
      socket.current = socketIOClient(`${REACT_APP_BACKEND_API}`);
      socket.current.on("connect", () => {
        socket.current.emit("add-socket-id", { userId });
      });

      // listen for call event, and answer
      peer.current.on("call", call => {
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

        const socketId = socket.current.id;
        setRemoteSocketId(remoteSocketId);
        setSharedInterests(sharedInterests);

        const data = {
          metadata: {
            sharedInterests: sharedInterests,
            remoteSocketId: socketId
          }
        };

        // start calling the other peer and send shared interests to that peer
        const call = peer.current.call(
          peerId,
          videoRef.current.srcObject,
          data
        );
        currentCall.current = call;
        call.on("stream", remoteVidoStream => {
          remoteVideoRef.current.srcObject = remoteVidoStream;
        });
      });

      // end the peer call after getting endCall event from server
      socket.current.on("endCall", () => {
        socket.current.emit("enter-lobby", { userId });
        endCall();
      });

      // Other socket event listeners
      // register receiving contact info event
    }
  }, [userId, peer, socket, setRemoteSocketId, addContact]);

  return { videoRef, remoteVideoRef, endCall, handleLogin, socket, loginFormElements, waitingElement };
}

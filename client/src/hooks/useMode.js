import {useState, useEffect} from 'react';

const SIGNED_OUT = 'SIGNED_OUT';
const OUTSIDE_LOBBY = 'OUTSIDE_LOBBY';
const IN_LOBBY = 'IN_LOBBY';
const IN_CALL = 'IN_CALL';


export default function useMode({userId, remoteSocketId, inLobby}) {
  const [mode, setMode] = useState(SIGNED_OUT);

  useEffect(() => {
    switch(true) {
    case !userId:
      setMode(SIGNED_OUT);
      break;
    case userId && !inLobby:
      setMode(OUTSIDE_LOBBY);
      break;
    case userId && inLobby:
      setMode(IN_LOBBY);
      break;
    case remoteSocketId && !inLobby:
      setMode(IN_CALL);
      break;
    default:
      break;
    }
  }, [userId, remoteSocketId, inLobby]);

  return mode;
};
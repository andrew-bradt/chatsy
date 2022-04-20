import {useState, useEffect} from 'react';

const SIGNED_OUT = 'SIGNED_OUT';
const OUTSIDE_LOBBY = 'OUTSIDE_LOBBY';
const IN_LOBBY = 'IN_LOBBY';
const IN_CALL = 'IN_CALL';


export default function useMode({userId, remoteSocketId, inLobby}) {
  const [mode, setMode] = useState(SIGNED_OUT);

  const newMode = (() => {
    switch(true) {
      case !userId:
        return SIGNED_OUT;
      case userId && !inLobby:
        return OUTSIDE_LOBBY;
      case userId && inLobby:
        return IN_LOBBY;
      case remoteSocketId && !inLobby:
        return IN_CALL;
      default:
        break;
      }
  })();

  (newMode !== mode) && setMode(newMode);

  return mode;
};
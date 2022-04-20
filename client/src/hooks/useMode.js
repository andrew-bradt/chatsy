import {useState, useEffect} from 'react';

const SIGNED_OUT = 'SIGNED_OUT';
const OUTSIDE_LOBBY = 'OUTSIDE_LOBBY';
const IN_LOBBY = 'IN_LOBBY';
const IN_CALL = 'IN_CALL';

export default function useMode({userId, remoteSocketId, inLobby}) {
  const [mode, setMode] = useState(SIGNED_OUT);

  // const newMode = (() => {
  // switch(true) {
  //   case !userId:
  //     return SIGNED_OUT;
  //   case userId && !inLobby:
  //     return OUTSIDE_LOBBY;
  //   case inLobby && !remoteSocketId:
  //     return IN_LOBBY;
  //   case remoteSocketId:
  //     return IN_CALL;
  //   default:
  //     break;
  //   }
  // })();
  const changeMode = (newMode) => (mode !== newMode) && setMode(newMode);

  if(!userId) {
    changeMode(SIGNED_OUT);
  } else if (userId && !inLobby) {
    changeMode(OUTSIDE_LOBBY);
  } else if (inLobby && !remoteSocketId) {
    changeMode(IN_LOBBY);
  } else if (remoteSocketId) {
    changeMode(IN_CALL);
  }
  console.log(mode);
  return {mode};
};
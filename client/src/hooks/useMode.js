import React, {useState, useEffect} from 'react';

const SIGNED_OUT = 'SIGNED_OUT';
const OUTSIDE_LOBBY = 'OUTSIDE_LOBBY';
const IN_LOBBY = 'IN_LOBBY';
const IN_CALL = 'IN_CALL';


export default function useMode({userId, remoteSocketId, inLobby}) {
  const [mode, setMode] = useState(SIGNED_OUT);

  useEffect(() => {}, [userId, remoteSocketId, inLobby]);

  const modesMap = new Map([
    [!userId, SIGNED_OUT],
    [userId && !inLobby, OUTSIDE_LOBBY],
    [userId && inLobby, IN_LOBBY],
    [remoteSocketId && !inLobby, IN_CALL]
  ]);

  return mode;
};

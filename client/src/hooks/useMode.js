import React, {useState} from 'react';

const SIGNED_OUT = 'SIGNED_OUT';
const OUTSIDE_LOBBY = 'OUTSIDE_LOBBY';
const IN_LOBBY = 'IN_LOBBY';
const IN_CALL = 'IN_CALL';

export default function useMode({userId, remoteSocketId}) {
  const [mode, setMode] = useState(SIGNED_OUT);
  

  return mode;
};

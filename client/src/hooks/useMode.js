const SIGNED_OUT = 'SIGNED_OUT';
const OUTSIDE_LOBBY = 'OUTSIDE_LOBBY';
const IN_LOBBY = 'IN_LOBBY';
const IN_CALL = 'IN_CALL';

export default function useMode({userId, remoteSocketId, inLobby}) {
  const mode = (() => {
    switch(true) {
      case !userId:
        return SIGNED_OUT;
      case userId && !inLobby:
        return OUTSIDE_LOBBY;
      case inLobby && !remoteSocketId:
        return IN_LOBBY;
      case !(!remoteSocketId):
        return IN_CALL;
      default:
        break;
      }
  })();

  return {mode, SIGNED_OUT, OUTSIDE_LOBBY, IN_CALL, IN_LOBBY};
};
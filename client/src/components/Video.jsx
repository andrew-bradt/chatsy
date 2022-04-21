import React from "react";

export default function Video(props) {
  const { videoRef, remoteVideoRef, remoteSocketId } = props

  return (
    <>
      <video ref={videoRef} autoPlay height='340'></video>
      {!remoteSocketId && <img height='340' src="https://cdn.dribbble.com/users/563824/screenshots/3633228/media/d876c7712d969c0656302b16b16af2cc.gif" alt="placeholder"></img>}
      {remoteSocketId && <video ref={remoteVideoRef} autoPlay height='340'></video>}
    </>
  )
}
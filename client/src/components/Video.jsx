/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import React from "react";
import {Box} from '@mui/material';

export default function Video(props) {
  const { videoRef, remoteVideoRef, remoteSocketId } = props
  
  const children = css({
    borderRadius: '10px',
    width: '50%',
    boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)'
  });

  return (
    <>
      <video ref={videoRef} autoPlay css={children}></video>
      {!remoteSocketId && <img src="https://cdn.dribbble.com/users/563824/screenshots/3633228/media/d876c7712d969c0656302b16b16af2cc.gif" alt="placeholder" css={children}></img>}
      {remoteSocketId && <video ref={remoteVideoRef} autoPlay css={children}></video>}
    </>
  )
}
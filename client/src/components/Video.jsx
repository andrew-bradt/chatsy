/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import React from "react";
import {Box} from '@mui/material';

export default function Video(props) {
  const { videoRef, remoteVideoRef, remoteSocketId } = props
  
  return (
    <>
    {/* <Box component='div' css={videoContainer}> */}
      <video ref={videoRef} autoPlay css={clientVideo}></video>
      {!remoteSocketId && <img src="https://cdn.dribbble.com/users/563824/screenshots/3633228/media/d876c7712d969c0656302b16b16af2cc.gif" alt="placeholder" css={peerVideo}></img>}
      {remoteSocketId && <video ref={remoteVideoRef} autoPlay css={peerVideo}></video>}
    {/* </Box> */}
    </>
  )
};

const videoContainer = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // position: 'relative',
  backgroundColor: 'red',
  height: '100%'
  // margin: 'auto 0'
});

const children = css({
  borderRadius: '30px',
  boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
  transform: 'scaleX(-1)'
});

const clientVideo = css(children, {
  position: 'absolute',
  right: '3%',
  bottom: '10%',
  width: '30%',
  zIndex: 1,
});

const peerVideo = css(children, {
  width: '90%',
  margin: '8% auto',
  zIndex: 0
});
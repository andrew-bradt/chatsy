/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import React from "react";
import peerPlaceholder from '../assets/peer_placeholder.gif';

export default function Video(props) {
  const { videoRef, remoteVideoRef, remoteSocketId } = props
  
  return (
    <>
      {videoRef && <video ref={videoRef} autoPlay css={clientVideo}></video>}
      {!remoteSocketId && <img src={peerPlaceholder} alt="placeholder" css={peerVideo}></img>}
      {remoteSocketId && <video ref={remoteVideoRef} autoPlay css={peerVideo}></video>}
      </>
  )
};

const children = css({
  borderRadius: '30px',
  boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
  transform: 'scaleX(-1)'
});

const clientVideo = css(children, {
  position: 'absolute',
  right: '3%',
  bottom: '7%',
  width: '15%',
  zIndex: 1,
});

const peerVideo = css(children, {
  width: '90%',
  margin: 'auto',
  zIndex: 0
});
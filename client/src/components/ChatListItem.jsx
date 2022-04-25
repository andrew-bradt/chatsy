/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import React from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const message = css({
  width: '66%',
  padding: '2%',
  margin: '2%'
});

const peerMessage = css(message, {
  borderRadius: '0px 5px 5px 5px',
});

const clientMessage = css(message, {
  borderRadius: '5px 0px 5px 5px',
  alignSelf: 'flex-end',
  marginRight: '4%'
});

export default function ChatListItem({text, fromPeer}) {
  return (
    <Paper
      elevation={3}
      css = {(fromPeer) ? peerMessage : clientMessage}
    >
      <Typography>{text}</Typography>
    </Paper>
  );
}
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import React from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function ChatListItem({text, fromPeer}) {
  return (
    <Paper
      elevation={1}
      css = {(fromPeer) ? peerMessage(text) : clientMessage(text)}
    >
      <Typography>{text}</Typography>
    </Paper>
  );
}

const calcPaddingByStringLength = ({paddingShort, paddingLong, lengthThresh}) => {
  return (string) => {
    return (string.length < lengthThresh) ? paddingShort : paddingLong;
  }
};
const calcRightPadding = calcPaddingByStringLength({paddingShort: '2.75%', paddingLong: '2%', lengthThresh: 50});
const calcLeftPadding = calcPaddingByStringLength({paddingShort: '2.25%', paddingLong: '2%', lengthThresh: 50});

const message = css({
  maxWidth: '66%',
  padding: '2%',
  marginBottom: '2%',
  borderRadius: '15px',
});

const peerMessage = (text) => css(message, {
  borderTopLeftRadius: 0,
  alignSelf: 'flex-start',
  paddingRight: calcRightPadding(text)
});

const clientMessage = (text) => css(message, {
  borderTopRightRadius: 0,
  alignSelf: 'flex-end',
  paddingLeft: calcLeftPadding(text)
});
/** @jsxImportSource @emotion/react */

import {css} from '@emotion/react';
import React, {useState} from 'react'

import ChatListItem from './ChatListItem';
import Box from '@mui/material/Box';

const testMessages = [
  {
    text: 'Hello',
    fromPeer: true
  },
  {
    text: 'Hi',
    fromPeer: false
  },
  {
    text: 'ok',
    fromPeer: true
  }
];

const styles = () => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-style: solid;
`;

export default function Chat() {
  const [messages, setMessages] = useState(testMessages);
  return (
    <Box
     css={styles()}
    >
      {messages.map(message => <ChatListItem text = {message.text} fromPeer = {message.fromPeer}/>)}
    </Box>
  )
};

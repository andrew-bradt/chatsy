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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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

const styles = {
  wrapper: css`
    background-color:pink;
    width: 100%;
    height: 65%;
  `,

  msgBox: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-style: solid;
    overflow-y: scroll;
  `
};

export default function Chat() {
  const [messages, setMessages] = useState(testMessages);
  const [inputVal, setInputVal] = useState()
  return (
    <Box css={styles.wrapper}>
      <Box css={styles.msgBox}>
        {messages.map((message, i) => <ChatListItem text = {message.text} fromPeer = {message.fromPeer}/>)}
      </Box>
    </Box>
  );
};
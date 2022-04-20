/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import React, {useState} from 'react'

import ChatListItem from './ChatListItem';
import Box from '@mui/material/Box';

import { InputAdornment, TextField } from '@mui/material';

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
  wrapper: css({
    backgroundColor: 'pink',
    width: '100%',
    height: '75%'
  }),

  child: css({
    width: '100%',
    backgroundColor: 'green'
  }),
    
  msgBox: css({
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    border: '3px solid black',
    overflowY: 'scroll'
  })
};

export default function Chat({socket}) {
  const [messages, setMessages] = useState(testMessages);
  const [inputVal, setInputVal] = useState();


  return (
    <Box css={styles.wrapper}>
      <Box css={styles.msgBox}>
        {messages.map((message, i) => <ChatListItem key = {i} text = {message.text} fromPeer = {message.fromPeer}/>)}
      </Box>
      <Box component='form'>
        <TextField id='compose-msg'/>
      </Box>
    </Box>
  );
};
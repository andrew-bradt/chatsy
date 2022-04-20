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



export default function Chat({socket}) {
  const [messages, setMessages] = useState(testMessages);
  const [inputVal, setInputVal] = useState();
  
  const send = (e) => {
    e.preventDefault();
    console.log('send msg');
  };

  return (
    <Box css={wrapper}>
      <Box 
        css={msgBox}
      >
        {messages.map((message, i) => <ChatListItem key = {i} text = {message.text} fromPeer = {message.fromPeer}/>)}
      </Box>
      <Box component='form' onSubmit = {(e) => send(e)}>
        <TextField css={textField} id='compose-msg'/>
      </Box>
    </Box>
  );
};

const wrapper = css({
  backgroundColor: 'pink',
  width: '100%',
  height: '75%'
});

const wrapperChildren = css({
  overflowY: 'scroll',
  width: '100%'
});

const msgBox = css(wrapperChildren, {
  height: '90%',
  display: 'flex',
  flexDirection: 'column',
  border: '3px solid black'
});

const textField = css(wrapperChildren, {

});
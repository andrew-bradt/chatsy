/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import React, {useState, useEffect} from 'react';

import ChatListItem from './ChatListItem';
import Box from '@mui/material/Box';

import { InputAdornment, TextField } from '@mui/material';

// const testMessages = [
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   },
//   {
//     text: 'Hello',
//     fromPeer: true
//   },
//   {
//     text: 'Hi',
//     fromPeer: false
//   },
//   {
//     text: 'ok',
//     fromPeer: true
//   }
// ];

const testMessages = [
  {
    text: 'Hello',
    fromPeer: true
  },
  {
    text: 'Hello',
    fromPeer: false
  },
  {
    text: 'Hello',
    fromPeer: true
  }
];


export default function Chat({socket, remoteSocketId}) {
  const [messages, setMessages] = useState(testMessages);
  const [value, setValue] = useState('');

  useEffect(() => {
    if(socket) {
    }
  }, [socket]);
  
  const appendMsg = (msgObj) => setMessages([...messages, msgObj]);

  const send = (e) => {
    e.preventDefault();
    appendMsg({text: value, fromPeer: false});
    socket.current.emit('send-msg', ({msg: value, remoteSocketId}));
    setValue('');
  };

  return (
    <Box css={wrapper}>
      <Box 
        css={msgBox}
      >
        {messages.map((message, i) => <ChatListItem key = {i} text = {message.text} fromPeer = {message.fromPeer}/>)}
      </Box>
      <Box component='form' onSubmit = {(e) => send(e)}>
        <TextField 
          css={textField} 
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
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
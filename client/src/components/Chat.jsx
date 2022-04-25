/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import React, {useState, useEffect} from 'react';

import ChatListItem from './ChatListItem';
import Box from '@mui/material/Box';

import {InputAdornment, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Chat({socket, remoteSocketId}) {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  console.log('rerender');
  useEffect(() => {
    if(socket) {
      socket.on('msg', ({msg}) => appendMsg({text: msg, fromPeer: true}));
    }
    
    return () => {
      socket.off('msg');
    }
  }, [socket]);
  
  const appendMsg = (msgObj) => setMessages(prev => [...prev, msgObj]);

  const send = (e) => {
    e.preventDefault();
    appendMsg({text: value, fromPeer: false});
    socket.emit('send-msg', ({msg: value, remoteSocketId}));
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
          multiline
          variant='standard'
          minRows={2}
          maxRows={2}
          onChange={(e) => setValue(e.target.value)}
          InputProps={{
            variant: 'filled',
            disableUnderline: true,
            endAdornment:
              <InputAdornment position='start'>
                <SendIcon/>
              </InputAdornment>
          }}
        />
      </Box>
    </Box>
  );
};

const wrapper = css({
  width: '100%',
  height: '75%',
  border: '1px solid red'
});

const wrapperChildren = css({
  width: '100%'
});

const msgBox = css(wrapperChildren, {
  overflowY: 'scroll',
  border: '1px solid green',
  height: '90%',
  display: 'flex',
  flexDirection: 'column',
  padding: '15px',
});

const textField = css(wrapperChildren, {
  padding: '15px',
  border: '1px solid purple'
});
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import React, {useState, useEffect} from 'react';

import ChatListItem from './ChatListItem';
import Box from '@mui/material/Box';

import {InputAdornment, TextField, Divider } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Chat({socket, remoteSocketId}) {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');

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
      <Divider/>
      <Box 
        css={msgBox}
      >
        {messages.map((message, i) => <ChatListItem key = {i} text = {message.text} fromPeer = {message.fromPeer}/>)}
      </Box>
      <Divider/>
      <Box component='form' onSubmit = {(e) => send(e)}>
        <TextField 
          css={textField} 
          value={value}
          multiline
          variant='standard'
          maxRows={2}
          onChange={(e) => setValue(e.target.value)}
          InputProps={{
            variant: 'filled',
            disableUnderline: true,
            endAdornment:
              <InputAdornment position='start' css={adornment}>
                <SendIcon/>
              </InputAdornment>
          }}
        />
      </Box>
      <Divider/>
    </Box>
  );
};

const wrapper = css({
  width: '100%',
  height: '75%',
  display: 'flex',
  flexDirection: 'column'
});

const wrapperChildren = css({
  width: '100%'
});

const msgBox = css(wrapperChildren, {
  overflowY: 'scroll',
  height: '90%',
  display: 'flex',
  flexDirection: 'column',
  padding: '15px'
});

const textField = css(wrapperChildren, {
  padding: '15px'
});

const adornment = css({
  marginTop: 5
});
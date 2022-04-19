import React from 'react'

export default function ChatListItem({message}) {
  const {msg, fromPeer} = message;
  
  return (
    <li>{msg}</li>
  );
}

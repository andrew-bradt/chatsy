import React, {useState} from 'react'
import ChatListItem from './ChatListItem';

const testMsgs = [
  {
    msg: 'ahsdhf',
    fromPeer: true
  },
  {
    msg: 'ahdjsha',
    fromPeer: false
  },
  {
    msg: 'hha',
    fromPeer: true
  }
];

export default function Chat() {
  const [messages, setMessages] = useState(testMsgs);

  return (
    <ul>
      {
        messages.map(message => <ChatListItem message={message}/>)
      }
    </ul>
  )
};